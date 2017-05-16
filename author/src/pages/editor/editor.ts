import { Component } from '@angular/core';
import { NavController, Events, PopoverController, ToastController } from 'ionic-angular';

import { PreviewPage } from '../preview/preview';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html'
})

export class EditorPage {

  constructor(public navCtrl: NavController,
              public events: Events,
              public popoverCtrl: PopoverController,
              public toastCtrl: ToastController) {

  }

  showContentPage() {
    this.navCtrl.setRoot(PreviewPage);
    this.events.publish('splitPane:visible', { show: true });
  }

  savePost() {
    this.presentToast();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ProfilePage);
    popover.present({
      ev: myEvent
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Your post was saved.',
      duration: 1500,
      position: 'bottom',
      cssClass: 'savePostMessage'
    });
    toast.present();
  }
}
