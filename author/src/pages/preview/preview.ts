import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../providers/post';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html'
})

export class PreviewPage {

  // public post: any;
  public post: Post;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.post = navParams.get('param1');

    if (this.post === undefined) {
      this.post = {
          "id": 1,
          "uuid": "bc0a0924-b49c-45c8-897d-728f6acba7c1",
          "title": "Build a Desktop Application with Ionic 3 (and Angular 4)"
        };
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
