
<template>
  <ion-page>
    <!-- User -->
    <ion-content :fullscreen="true">
      <ExploreContainer name="New request page" />
      <div class="requstContainer ion-padding">
        <div class="deliveryContainer">
          <div class="text-grey ion-padding-bottom">Delivery date</div>
          <div class="ion-padding deliveryDate">13 Oct 2021</div>
        </div>
        <div class="goodsSelect ion-padding-top">
          <div class="text-grey ion-padding-bottom">Select Goods</div>
          <div class="ion-border">
            <ion-accordion-group>
              <ion-accordion value="colors" :toggle-icon="arrowDownCircle">
                <div slot="header">
                  <div class="plywood-invoice ion-border-bottom">Plywood</div>
                </div>

                <ion-list slot="content">
                  <p class="doc-subtitle text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam sed at ratione. Praesentium, totam nisi.
                  </p>
                  <ion-row class="ion-align-items-center" style="width: 100%">
                    <ion-col size="4">
                      <div class="plywood-invoice">Quantity:</div>
                    </ion-col>
                    <ion-col size="6">
                      <div class="ion-padding ion-border">400</div>
                    </ion-col>
                    <ion-col size="2" class="ion-text-center">
                      <ion-icon :icon="trashOutline"></ion-icon>
                    </ion-col>
                  </ion-row>
                </ion-list>
              </ion-accordion>
            </ion-accordion-group>
          </div>
        </div>
      </div>
      <div class="ion-margin ion-border">
        <ion-row class="text-grey">
          <ion-col size="10">Add more goods</ion-col>
          <ion-col size="2" class="ion-text-center"
            ><ion-icon :icon="addCircleOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </div>
      <div class="requestBtn">
        <div class="redCustomBtn customPadding">Make request</div>
      </div>
    </ion-content>

  </ion-page>
</template>

<script>

import ExploreContainer from "@/components/ExploreContainer.vue";
/* User module */
import {
  IonPage,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/vue";
import { ref } from "vue";
import {
  arrowDownCircle,
  trashOutline,
  addCircleOutline
} from "ionicons/icons";
export default {
  name: "New request",
  components: {
    ExploreContainer,
    IonContent,
    IonPage,
    IonAccordion,
    IonAccordionGroup,
  },
  setup() {
    const accordionGroup = ref();
    const logAccordionValue = () => {
      if (accordionGroup.value) {
        console.log(accordionGroup.value.$el.value);
      }
    };
    const closeAccordion = () => {
      if (accordionGroup.value) {
        accordionGroup.value.$el.value = undefined;
      }
    };
    return {
      arrowDownCircle,
      accordionGroup,
      closeAccordion,
      trashOutline,
      logAccordionValue,
      addCircleOutline
    };
  },
};
</script>

<style>

.requestBtn {
  width: 60%;
  margin: 0 auto;
}
.customPadding {
  padding: 15px 10px;
}
.text-darkblue span{
  color:var(--ion-color-secondary);
  font-weight: 700;
    font-size: 14px;
}
/* Admin */
.productContainer ion-icon{
  color: #ABAEBD;
}

</style>