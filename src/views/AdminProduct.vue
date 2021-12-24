
<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <ExploreContainer name="New request page" />
      <div class="title text-lightred ion-padding ion-text-center">Company</div>
      <div class="productContainer ion-padding">
        <ion-row class="ion-align-items-center ion-border-bottom">
          <ion-col size="10">
            <ion-card-title class="text-darkblue">Product 01 | <span>25 Qty</span></ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Metal rods of cast iron materials with..</ion-card-subtitle>
          </ion-col>
          <ion-col size="2" class="ion-text-center">
            <ion-icon :icon="removeCircle"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center ion-border-bottom">
          <ion-col size="10">
            <ion-card-title class="text-darkblue">Product 01 | <span>25 Qty</span></ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Metal rods of cast iron materials with..</ion-card-subtitle>
          </ion-col>
          <ion-col size="2" class="ion-text-center">
            <ion-icon :icon="removeCircle"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center ion-border-bottom">
          <ion-col size="10">
            <ion-card-title class="text-darkblue">Product 01 | <span>25 Qty</span></ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Metal rods of cast iron materials with..</ion-card-subtitle>
          </ion-col>
          <ion-col size="2" class="ion-text-center">
            <ion-icon :icon="removeCircle"></ion-icon>
          </ion-col>
        </ion-row>
      </div>

      <div class="requstContainer ion-padding">
        <div class="deliveryContainer ion-padding-bottom ion-margin-bottom">
          <div class="ion-padding deliveryDate ion-text-center">Add article</div>
        </div>
         <div class="deliveryContainer ion-padding-bottom">
          <div class="ion-padding deliveryDate ion-text-center custom-d-flex">Order &nbsp;<span class="yellowCircle">03</span></div>
        </div>
         <div class="deliveryContainer ion-padding-bottom">
          <div class="ion-padding deliveryDate ion-text-center custom-d-flex"><ion-icon :icon="logoWechat"></ion-icon>&nbsp;Message &nbsp;<span class="redCircle">02</span></div>
        </div>
         <div class="deliveryContainer ion-padding-bottom">
          <div class="ion-padding deliveryDate ion-text-center custom-d-flex"><ion-icon :icon="documentTextSharp"></ion-icon>&nbsp;Attachment</div>
        </div>
         <div class="statusBar">
            <ion-row class="ion-justify-content-between ion-align-items-center">
              <ion-col size="10"><ion-label class="text-darkblue">Current status</ion-label></ion-col>
              <ion-col size="2"><ion-toggle checked="false"></ion-toggle></ion-col>
            </ion-row>
          </div>
      </div>
     
    </ion-content>
  </ion-page>
</template>

<script>

import ExploreContainer from "@/components/ExploreContainer.vue";

import {
  IonPage,
  IonContent
} from "@ionic/vue";
import { ref } from "vue";
import {
  removeCircle,
  documentTextSharp,
  logoWechat
} from "ionicons/icons";

export default {
  name: "New request",
  components: {
    ExploreContainer,
    IonContent,
    IonPage
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
      removeCircle,
      documentTextSharp,
  logoWechat
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