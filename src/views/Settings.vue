<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Setting page" />
      <div class="listOfMenu">
        <ul class="ion-padding ion-no-margin">
          <li>
            <ion-icon :icon="personCircleOutline"></ion-icon>
            <ion-label>Company</ion-label>
          </li>
          <li>
            <ion-icon :icon="mailOpen"></ion-icon>
            <ion-label>johndoe123@company.com</ion-label>
          </li>
          <li>
            <div class="d-flex" >
              <ion-icon :icon="notifications"></ion-icon>
              <ion-label>Notification</ion-label>
            </div>
            <div>
               <ion-toggle checked="false"></ion-toggle>
            </div>
           
          </li>
          <li>
            <ion-icon :icon="logOutOutline"></ion-icon>
            <ion-label>Log out</ion-label>
          </li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonToggle } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import {
  mailOpen,
  notifications,
  logOutOutline,
  personCircleOutline,
} from "ionicons/icons";

export default {
  name: "Setting",
  components: { ExploreContainer, IonContent, IonPage, IonToggle },
  setup() {
    return {
      mailOpen,
      notifications,
      logOutOutline,
      personCircleOutline,
    };
  },
};
</script>
<style>
.listOfMenu li {
  list-style: none;
  padding: 16px 0;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgb(171 174 188 / 50%);
}
.listOfMenu li:nth-child(3) {
display: flex;
align-items: center;
justify-content: space-between;
}
.listOfMenu li:last-child {
  border-bottom: none;
  color: var(--ion-color-primary);
}
.listOfMenu li ion-icon {
  padding: 0px 10px;
}
ion-toggle{
    --handle-height: calc(22px - (2px * 2)) !important;
    --handle-width: calc(22px - (2px * 2)) !important;
    height: 22px !important;
}
</style>