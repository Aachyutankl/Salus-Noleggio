<template>
  <ion-page>
    <ion-content>
<!-- Approval tab content -->
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
        </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {mailOpenOutline, lockClosedOutline, eyeOutline} from 'ionicons/icons';
import {
  IonPage
} from '@ionic/vue';

export default defineComponent({
  components: { IonPage},
  setup() {
    return {
      mailOpenOutline,
      lockClosedOutline,
      eyeOutline
    };
  }
});
</script>

<style>

.font-weight {
  font-weight: 700;
}

.listOfContainer{
  padding: 6px 16px;
}
</style>