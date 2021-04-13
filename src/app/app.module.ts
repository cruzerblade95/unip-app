import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgxQRCodeModule } from "ngx-qrcode2";

export const firebaseConfig = {
//     apiKey: "AIzaSyCovSl4atTfqA6x3CDgn97B8ozr6EoEisc",
//   authDomain: "unipapp.firebaseapp.com",
//   databaseURL: "https://app-attandance-default-rtdb.firebaseio.com/",
//   projectId: "unipapp",
//   storageBucket: "",
//   messagingSenderId: "52047596843",
//   appId: "1:52047596843:web:6e5bc4d4a8bcf213"
    apiKey: "AIzaSyCtMxKoLsRk11hBcgKak0v1PNvBgbllA0k",
    authDomain: "app-attandance.firebaseapp.com",
    databaseURL: "https://app-attandance-default-rtdb.firebaseio.com/",
    projectId: "app-attandance",
    storageBucket: "app-attandance.appspot.com",
    messagingSenderId: "406216607469",
    appId: "1:406216607469:web:5213c5afc684087d892ee4"
    // measurementId: "G-H7ZLF101N0"
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        NgxQRCodeModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }