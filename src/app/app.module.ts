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
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { environment } from 'src/environments/environment';

// export const firebaseConfig = {
//     apiKey: "AIzaSyBLrgYdI5-SsBCBsiMDzP5JfepWOJXXEg4",
//     authDomain: "unip-app-project.firebaseapp.com",
//     projectId: "unip-app-project",
//     storageBucket: "unip-app-project.appspot.com",
//     messagingSenderId: "602879669286",
//     appId: "1:602879669286:web:54030753712026876222e7",
//     measurementId: "G-H7ZLF101N0"
// };

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        NgxQRCodeModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: FirestoreSettingsToken, useValue: {} }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }