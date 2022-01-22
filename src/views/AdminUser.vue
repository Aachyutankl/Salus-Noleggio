<template>
  <ion-page>
    <!-- Admin -->
    <ion-content :fullscreen="true">
      <ExploreContainer name="Document page" />
      <div class="outerPadding">
        <ion-tabs style="position: unset !important;">
          <ion-tab-bar slot="top" class="userApprovalTab">
            <ion-tab-button class="activeTab" tab="userPageTab" href="userPageTab">
              <ion-label>User</ion-label>
            </ion-tab-button>
      
            <ion-tab-button tab="approvalPageTab" href="approvalPageTab">
              <ion-label class="d-flex">Approval &nbsp;<span class="redCircle"> 02</span></ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonTabBar, IonTabButton, IonTabs } from "@ionic/vue";

import ExploreContainer from "@/components/ExploreContainer.vue";
import { chevronForwardOutline, calendar, personCircle } from "ionicons/icons";

export default {
  name: "Document",
  components: { ExploreContainer, IonContent, IonPage, IonTabBar, IonTabButton, IonTabs },
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

.listOfContainer{
  padding: 6px 16px;
}
/* Admin */

.userApprovalTab{
  --background: var(--ion-color-primary);
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-family: 'Spartan-semibold';
  font-size: 14px;
 padding:10px !important
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