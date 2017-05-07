import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PreviewPage } from '../pages/preview/preview';
import { EditorPage } from '../pages/editor/editor';

import { GeneralSettingsPage } from '../pages/settings/general/general';

@NgModule({
  declarations: [
    MyApp,
    PreviewPage,
    EditorPage,
    GeneralSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PreviewPage,
    EditorPage,
    GeneralSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
