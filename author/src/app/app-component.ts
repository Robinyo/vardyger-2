import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform, MenuController, Nav, Events } from 'ionic-angular';

import { PreviewPage } from '../pages/preview/preview';
import { EditorPage } from '../pages/editor/editor';
import { GeneralSettingsPage } from '../pages/settings/general/general';

import { Post } from '../providers/post';
import { PostService } from '../providers/post-service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('layout') splitPane: ElementRef;

  // make the PreviewPage the root (or first) page
  rootPage:any = PreviewPage;
  settingsPages: Array<{icon: string, title: string, component: any}>;

  posts: Post[];
  errorMessage: string;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public events: Events,
    private postService: PostService) {

    this.settingsPages = [
      { icon: 'settings', title: 'General', component: GeneralSettingsPage },
      { icon: 'navigate', title: 'Navigation', component: GeneralSettingsPage },
      { icon: 'pricetag', title: 'Tags', component: GeneralSettingsPage }
    ];

    this.posts = [];

    this.initialiseApp(events);
  }

  initialiseApp(events: Events) {
    this.platform.ready().then(() => {
      events.subscribe('splitPane:visible', (data) => {
        this.showSplitPane(data.show);
      });
    });
  }

  ngOnInit() {
    console.log("MyApp - ngOnInit()");
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
  }

  newPost() {
    this.nav.setRoot(EditorPage);
    this.menu.close();

    this.showSplitPane(false);
  }

  openPost(post) {
    this.nav.push(PreviewPage, { param1: post} );
    this.menu.close();
  }

  openPage(page) {
    this.nav.push(page.component);
    this.menu.close();
  }

  showSplitPane(show: boolean) {
    if (this.splitPane === undefined) { return; }

    if (show === true) {
      if (! this.splitPane.nativeElement.classList.contains('split-pane-visible')) {
        this.splitPane.nativeElement.classList.add('split-pane-visible');
        console.log("Added class 'split-pane-visible'");
      }
    } else {
      if (this.splitPane.nativeElement.classList.contains('split-pane-visible')) {
        this.splitPane.nativeElement.classList.remove('split-pane-visible');
      }
    }
  }
}
