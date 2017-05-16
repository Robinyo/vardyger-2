import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html'
})

export class PreviewPage {

  public param1: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.param1 = navParams.get('param1');

    if (this.param1 !== undefined) {
      console.log("post.id: " + this.param1.id);
    }
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
