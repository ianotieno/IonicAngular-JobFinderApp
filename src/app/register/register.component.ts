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
  IonLabel, IonToast } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  keyOutline,
  mailOutline,
  lockClosed,
  trash,
  eyeOffOutline,
  eyeOutline,
  personOutline,
} from 'ionicons/icons';

// Import SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonToast, 
    IonLabel,
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
export class RegisterComponent {
  form!: FormGroup;
  isPwd = false;

  constructor(private router: Router) {
    this.initForm();
    addIcons({
      lockClosed,
      personOutline,
      mailOutline,
      keyOutline,
      trash,
      eyeOffOutline,
      eyeOutline,
    });
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
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
    } else {
      // Show SweetAlert with a timer
      Swal.fire({
        title: 'Registered Successfully',
        icon: 'success',
        timer: 3000, // 3 seconds
        showConfirmButton: false, // Hide confirm button to let the timer close it
      }).then(() => {
        // After 3 seconds, navigate to login
        this.router.navigateByUrl('/login');
      });
    }
    console.log(this.form.value);
  }

  showAlert() {
    Swal.fire({
      title: 'Test Alert',
      icon: 'success',
      timer: 3000,
      showConfirmButton: false,
    });
  }
  

 
}
