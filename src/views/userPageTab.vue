<template>
  <ion-page>
     <ion-content>
  <div class="listOfContainer">          
          <!-- Default Searchbar -->
          <ion-searchbar></ion-searchbar>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;01</ion-col>
            <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;02</ion-col>
            <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;03</ion-col>
           <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;04</ion-col>
           <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;05</ion-col>
            <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
          <ion-row class="ion-border-bottom ion-align-items-center">
            <ion-col size="11" class="text-darkblue">Company&nbsp;06</ion-col>
           <ion-col size="1" class="ion-text-center"><ion-icon class="icon-grey" :icon="chevronForwardOutline"></ion-icon
            ></ion-col>
          </ion-row>
        </div>
     </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent,IonSearchbar } from 'vue';
import {mailOpenOutline, lockClosedOutline, eyeOutline} from 'ionicons/icons';
import {
  IonPage
} from '@ionic/vue';

export default defineComponent({
  components: {IonPage,IonSearchbar },
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