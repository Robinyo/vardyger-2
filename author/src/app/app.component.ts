import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { PreviewPage } from '../pages/preview/preview';
import { EditorPage } from '../pages/editor/editor';

import { GeneralSettingsPage } from '../pages/settings/general/general';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild('layout') splitPane: ElementRef;

  // make PreviewPage the root (or first) page
  rootPage:any = PreviewPage;
  settingsPages: Array<{icon: string, title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController) {

    this.initializeApp();

    this.settingsPages = [
      { icon: 'settings', title: 'General', component: GeneralSettingsPage },
      { icon: 'navigate', title: 'Navigation', component: GeneralSettingsPage },
      { icon: 'pricetag', title: 'Tags', component: GeneralSettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();

    });
  }

  newPost() {

    this.menu.close();
    this.nav.setRoot(EditorPage);

    // if the menu is visible, hide it
    if (this.splitPane !== undefined) {
      if (this.splitPane.nativeElement.classList.contains('split-pane-visible')) {
        this.splitPane.nativeElement.classList.remove('split-pane-visible');
        // console.log("Menu not visible");
      }
    }
  }

  openPost() {
    this.nav.push(PreviewPage);
    this.menu.close();
  }

  openPage(page) {
    this.nav.push(page.component);
    this.menu.close();
  }

}
