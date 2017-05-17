import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../providers/post';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html'
})

export class PreviewPage {

  public post: Post;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.post = navParams.get('param1');

    if (this.post === undefined) {
      this.post = {
        "id": 1,
        "uuid": "bc0a0924-b49c-45c8-897d-728f6acba7c1",
        "title": "Build a Desktop Application with Ionic 3 (and Angular 4)",
        "slug": "build-a-desktop-application-with-ionic-3-and-angular-4",
        "markdown": "In the last few posts I have written about...",
        "html": "In the last few posts I have written about <a href=\"http://robferguson.org/2017/03/23/getting-started-with-apache-sling/\" target=\"_blank\">Apache Sling</a>, a REST-based web framework, that makes it easy to build content-oriented applications (e.g., websites and related services).",
        "image": "",
        "featured": false,
        "page": false,
        "status": "published",
        "language": "en_GB",
        "meta_title": "",
        "meta_description": "",
        "created_at": "2016-11-17T19:02:27.147Z",
        "created_by": 1,
        "updated_at": "2016-11-17T19:02:27.147Z",
        "updated_by": 1,
        "published_at": "2016-11-17T19:02:27.173Z",
        "published_by": 1,
        "author": 1,
        "url":"/build-a-desktop-application-with-ionic-3-and-angular-4/"
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

// See: http://stackoverflow.com/questions/31548311/angular-2-html-binding
