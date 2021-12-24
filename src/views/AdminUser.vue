<template>
  <ion-page>
    <!-- Admin -->
    <ion-content :fullscreen="true">
      <ExploreContainer name="Document page" />
      <div class="ion-padding">
        <div class="listOfContainer">
          <!-- Default Searchbar -->
        <ion-searchbar></ion-searchbar>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company01</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company02</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company03</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company04</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company05</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom">
            <ion-col size="10" class="text-darkblue">Company06</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
        </div>

        <div class="approvalContainer">
          <ion-card>
            <ion-row class="ion-align-items-center">
              <ion-col size="5">
                <div class="text-darkblue">Company 01</div>
              </ion-col>
              <ion-col size="3.5" class="ion-text-center">
                <div class="redCustomBtn customPadding">Request</div>
              </ion-col>
              <ion-col size="3.5" class="ion-text-center">
                <div class="greenCustomBtn customPadding">Accept</div>
              </ion-col>
            </ion-row>
          </ion-card>
          <ion-card>
            <ion-row class="ion-align-items-center">
              <ion-col size="5">
                <div class="text-darkblue">Company 01</div>
              </ion-col>
              <ion-col size="3.5" class="ion-text-center">
                <div class="redCustomBtn customPadding">Request</div>
              </ion-col>
              <ion-col size="3.5" class="ion-text-center">
                <div class="greenCustomBtn customPadding">Accept</div>
              </ion-col>
            </ion-row>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonSearchbar } from "@ionic/vue";

import ExploreContainer from "@/components/ExploreContainer.vue";
import { chevronForwardOutline, calendar, personCircle } from "ionicons/icons";

export default {
  name: "Document",
  components: { ExploreContainer, IonContent, IonPage, IonSearchbar },
  setup() {
    return {
      chevronForwardOutline,
      calendar, 
      personCircle
    };
  },
};
</script>
<style>
.text-blue {
  color: #40a6fc;
  font-size: 12px;
}
.font-weight {
  font-weight: 700;
}
/* Admin */
.customPadding {
  padding: 6px;
}
</style>