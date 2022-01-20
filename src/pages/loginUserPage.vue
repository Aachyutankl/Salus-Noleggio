<template>
  <ion-page>
    <form>
    <ion-grid>
      <ion-row color="primary" justify-content-center>
        <ion-col size-xs="12">
          <div>
            <h3>Login</h3>
          </div>
          <div padding>
            <div class="custom-padding-vertical">
              <div class="dflex-border">
 <ion-icon :icon="mailOpenOutline" class="commonStyleIcon"></ion-icon>
              <ion-input class="ion-padding-horizontal" name="name" type="text" placeholder="Email id" ngModel required></ion-input>
              </div>
             
          </div>
          <div class="custom-padding-vertical">
            <div class="dflex-border">
              <ion-icon :icon="lockClosedOutline" class="commonStyleIcon"></ion-icon>
              <ion-input class="ion-padding-horizontal" name="password" type="password" placeholder="Password" ngModel required></ion-input>
              <ion-icon :icon="eyeOutline" class="commonStyleIcon"></ion-icon>
            </div>
              
            </div>
            <ion-row class="choice">
              <ion-col size-sm="6" class="remember">
                <ion-checkbox class="checkbox-square"></ion-checkbox><span>Remember me</span>
              </ion-col>
                <ion-col size-sm="6" class="lightred-text forgot-password ion-text-end">
                  <router-link to="/forgot">Forgot password?</router-link>

              </ion-col>  
            </ion-row>
          </div>
          
        </ion-col>
        <ion-col size-xs="12" class="ion-text-center">
          <div class="ion-padding-bottom">
            <ion-button class="common-btn" size="large" type="submit" expand="block"><router-link to="/tabs/">Login</router-link></ion-button>
          </div>
          <div class="account">Don’t have an account?</div>
          <div class="lightred-text"><span class="cursor-pointer"><router-link to="/signup">Sign up now</router-link></span></div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </form>
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