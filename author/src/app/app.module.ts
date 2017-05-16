import { NgModule, ErrorHandler  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app-component';
import { PreviewPage } from '../pages/preview/preview';
import { EditorPage } from '../pages/editor/editor';
import { ProfilePage } from '../pages/profile/profile';
import { GeneralSettingsPage } from '../pages/settings/general/general';

import { PostService } from '../providers/post-service';

@NgModule({
  declarations: [
    MyApp,
    PreviewPage,
    EditorPage,
    ProfilePage,
    GeneralSettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PreviewPage,
    EditorPage,
    ProfilePage,
    GeneralSettingsPage
  ],
  providers: [
    // StatusBar,
    // SplashScreen,
    PostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
