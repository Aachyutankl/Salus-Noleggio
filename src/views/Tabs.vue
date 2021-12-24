<template>
  <ion-page>
    <!-- User -->
    <!-- <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="documentTextSharp" />
          <ion-label>Document</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="addCircleSharp" />
          <ion-label>New Request</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="logoWechat" />
          <ion-label>Chat</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab5" href="/tabs/tab5">
        <ion-icon :icon="settingsSharp"></ion-icon>
          <ion-label>Setting</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs> -->
  
  <!-- Admin -->
  <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>User</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="addCircleSharp" />
          <ion-label>Product</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="logoWechat" />
          <ion-label>Chat</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab5" href="/tabs/tab5">
        <ion-icon :icon="settingsSharp"></ion-icon>
          <ion-label>Setting</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
/* import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, documentTextSharp, addCircleSharp, logoWechat, settingsSharp } from 'ionicons/icons'; //User
 export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      homeOutline, 
      documentTextSharp, 
      addCircleSharp,
      logoWechat,
       settingsSharp
    }
  }
}  */

/* Admin Start */
import { homeOutline, personCircleOutline, addCircleSharp, logoWechat, settingsSharp } from 'ionicons/icons'; //Admin
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      homeOutline, 
      personCircleOutline, 
      addCircleSharp,
      logoWechat,
       settingsSharp
    }
  }
}
/* Admin End */

</script>

<style>
ion-tab-bar{
  --background: #fff;
    --color: #000;
        box-shadow: 0px 0px 1px 2px #eeeeee;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border:none;
}
.ion-page{
  background: #fff;
}
ion-icon{
  font-size: 20px;
}


.brand-header {
  --background: #fc5a5f;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}
.ion-content {
  --background: #fff;
  --color: #000;
}
ion-card {
  box-shadow: 0px 0px 2px 2px #eeeeee;
  background: #fff;
  padding: 5px 10px;
  margin: 15px 10px;
}
.text-grey{
color: var(--ion-color-medium);
    font-size: 14px;
}
.text-lightred {
  color: var(--ion-color-primary);
  font-size: 14px;
}
.text-lightgrey {
  --color: var(--ion-color-medium,#ABAEBD);
  font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    font-weight:100
}
/* .text-darkblue {
  color: var(--ion-color-secondary);
  font-size: 12px;
} */
.text-green {
  color: var(--ion-color-tertiary);
  font-size: 12px;
}
.text-yellow{
  color: var(--ion-color-danger);
  font-size: 12px;
}
.custom-border-top {
  border-top: 1px solid rgb(248 95 99 / 30%);
      margin-top: 6px;
    padding-top: 6px;
}
.custom-border {
  border: 1px solid rgb(171 174 189 / 40%);
  border-radius: 5px;
}

.plywood-invoice{
      color: var(--ion-color-secondary);
    font-size: 16px;
    padding-bottom: 8px;
}
.doc-subtitle{
  --color: var(--ion-color-medium,#767780);
    font-size: 12px !important;
    white-space: unset;
    overflow: unset;
    text-overflow: unset;
    text-transform: none;
}
</style>