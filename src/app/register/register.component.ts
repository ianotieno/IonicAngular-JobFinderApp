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
      Swal.fire({
        title: 'Registering',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,  // Display this for 2 seconds
        heightAuto: false,
        didOpen: () => {
          Swal.showLoading();  // Show a loading spinner
        }
      }).then((result) => {
        // When the 'Now loading' alert is closed, show the 'Finished!' alert
        if (result.dismiss === Swal.DismissReason.timer) {
          // Display 'Finished!' SweetAlert
          Swal.fire({
            title: 'Registered Successfully!',
            icon: 'success',  // Use 'icon' instead of 'type'
            timer: 2000,
            showConfirmButton: false,
            heightAuto: false
          }).then(() => {
            // Navigate after the 'Finished!' alert is closed
            this.router.navigateByUrl('/login');
          });
      
        }})
    }
    console.log(this.form.value);
  }

 
  

 
}
