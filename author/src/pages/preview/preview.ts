import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html'
})

export class PreviewPage {

  constructor(public navCtrl: NavController) {

  }

  // ngOnInit
  ionViewWillEnter() {
    console.log("ionViewWillEnter()");
  }

  // ngOnDestroy
  onViewWillLeave() {
    console.log("onViewWillLeave()");
  }
}
