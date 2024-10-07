import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonIcon,
  IonText,
  IonItem,
  IonCard,
  IonRow,
  IonCol,
  IonToast, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { keyOutline, mailOutline, lockClosed, trash, eyeOffOutline, eyeOutline } from 'ionicons/icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonToast,
    IonCol,
    IonRow,
    IonCard,
    IonItem,
    IonText,
    IonIcon,
    IonInput,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ReactiveFormsModule,
  ],
})
export class LoginComponent   {

  form!: FormGroup;
  isPwd = false;
 
  isToast = false;
  toastMessage!: string;

  constructor(private router: Router) {
    this.initForm();
    addIcons({lockClosed,mailOutline,keyOutline,trash,eyeOffOutline,eyeOutline});
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  togglePwd() {
    this.isPwd = !this.isPwd;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }else{
      
      this.router.navigateByUrl('/tabs/home');
    }
    console.log(this.form.value);
    
  }

onRegister(){
  this.router.navigateByUrl('register');

}

  


  openToast(msg: string) {
    this.isToast = true;
    this.toastMessage = msg;
  }
}

