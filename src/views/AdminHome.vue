<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Home page" />

      <ion-card>
        <ion-row class="p-5">
          <ion-col size="6" class="ion-text-center">
            <ion-card-title class="text-yellow font-size">03</ion-card-title>
            <div class="text-darkblue">Order pending</div>
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <ion-card-title class="text-green font-size">25</ion-card-title>
            <div class="text-darkblue">To deliver</div>
          </ion-col>
        </ion-row>
      </ion-card>
      <ion-card>
        <ion-row>
          <ion-col size="10">
            <ion-card-title class="text-lightred">Metal rods</ion-card-title>
            <ion-card-subtitle class="text-lightgrey"
              >Metal rods of cast iron materials with..</ion-card-subtitle
            >
          </ion-col>
          <ion-col size="2" class="ion-text-center custom-border">
            <ion-card-title class="text-lightred">400</ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Qty</ion-card-subtitle>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <div class="text-darkblue">To: Daniel Richardo</div>
          </ion-col>
        </ion-row>
        <ion-row class="custom-border-top ion-align-items-center">
          <ion-col size="5">
            <div class="text-lightgrey">Request</div>
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
        <ion-row>
          <ion-col size="10">
            <ion-card-title class="text-lightred">Metal rods</ion-card-title>

            <ion-card-subtitle class="text-lightgrey"
              >Metal rods of cast iron materials with..</ion-card-subtitle
            >
          </ion-col>
          <ion-col size="2" class="ion-text-center custom-border">
            <ion-card-title class="text-lightred">400</ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Qty</ion-card-subtitle>
          </ion-col>
        </ion-row>
        <ion-row class="custom-border-top">
          <ion-col size="10">
            <ion-card-title class="text-lightred">Bathrob</ion-card-title>

            <ion-card-subtitle class="text-lightgrey"
              >Bathrob of cast iron materials with..</ion-card-subtitle
            >
          </ion-col>
          <ion-col size="2" class="ion-text-center custom-border">
            <ion-card-title class="text-lightred">40</ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Qty</ion-card-subtitle>
          </ion-col>
        </ion-row>
        <ion-row class="custom-border-top">
          <ion-col size="10">
            <ion-card-title class="text-lightred">Metal rods</ion-card-title>

            <ion-card-subtitle class="text-lightgrey"
              >Metal rods of cast iron materials with..</ion-card-subtitle
            >
          </ion-col>
          <ion-col size="2" class="ion-text-center custom-border">
            <ion-card-title class="text-lightred">10</ion-card-title>
            <ion-card-subtitle class="text-lightgrey">Qty</ion-card-subtitle>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <div class="text-darkblue">To: Daniel Richardo</div>
          </ion-col>
        </ion-row>
        <ion-row class="custom-border-top ion-align-items-center">
          <ion-col size="6">
            <div class="text-lightgrey">Request</div>
          </ion-col>
          <ion-col size="6" class="ion-text-center">
            <div class="customDropdown">
              <ion-item>
                <ion-select placeholder="Select option" interface="popover">
                  <ion-select-option value="accept">Accepted</ion-select-option>
                  <ion-select-option value="towork">To work</ion-select-option>
                  <ion-select-option value="todelivered">To delivered</ion-select-option>
                </ion-select>
              </ion-item>
            </div>
          </ion-col>
        </ion-row>
      </ion-card>
      
    </ion-content>
  </ion-page>
</template>
<style>
</style>
<script lang="ts">

import {
  IonPage,
  IonContent,
  IonCard,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

import ExploreContainer from "@/components/ExploreContainer.vue";

export default {
  name: "Home",
  components: {
    ExploreContainer,
    IonContent,
    IonPage,
    IonCard,
    IonItem,
    IonSelect,
    IonSelectOption,
  },
};

</script>
<style>
/* Admin start */
.customPadding {
  padding: 6px;
}
ion-select{
width:100%;
color: #1DBA20;
font-size: 12px;
}
ion-select label{
color: #1DBA20
}
.font-size{
  font-size:26px
}
.p-5{
padding:5px;
}
/* Admin end */
</style>