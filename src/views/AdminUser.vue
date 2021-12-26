<template>
  <ion-page>
    <!-- Admin -->
    <ion-content :fullscreen="true">
      <ExploreContainer name="Document page" />
      <div class="ion-padding">
        <div class="listOfContainer">
          <div class="userApprovalTab">
            <ion-row class="ion-align-items-center">
              <ion-col size="6">
                <div class="userTab">User</div>
              </ion-col>
              <ion-col size="6">
                <div class="approvalTab d-flex activeTab">
                  Approvals &nbsp;<span class="redCircle"> 02</span>
                </div>
              </ion-col>
            </ion-row>
          </div>
          <!-- Default Searchbar -->
          <ion-searchbar></ion-searchbar>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;01</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;02</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;03</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;04</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;05</ion-col>
            <ion-col size="2"
              ><ion-icon :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="10" class="text-darkblue">Company&nbsp;06</ion-col>
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
                <div class="redCustomBtn customPadding">Reject</div>
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
                <div class="redCustomBtn customPadding">Reject</div>
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
      personCircle,
    };
  },
};
</script>
<style>

.font-weight {
  font-weight: 700;
}
/* Admin */

.userApprovalTab{
  background: var(--ion-color-primary);
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-family: 'Spartan-semibold';
  font-size: 14px;
 
}
.activeTab{
  background: #fff;
  color:var(--ion-color-primary);
  padding:10px 5px;
  border-radius: 5px;
  font-family: 'Spartan-semibold';
   align-items: center;
}
</style>