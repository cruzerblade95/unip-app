import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(private router: Router, public firebaseauth: AngularFireAuth, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  register(form) {
    this.firebaseauth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(() => {
        firebase.database().ref('students/' + firebase.auth().currentUser.uid).set({
          name: form.value.name,
          enrollment: form.value.enrollment,
          class: form.value.class,
          email: form.value.email
        }).then(() => {
          this.exibirToast('Creating student successful');
        });
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
  }
}
