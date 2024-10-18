import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonText, IonButtons, IonBackButton,IonThumbnail, IonItem, IonChip, IonList, IonInput,IonSelectOption,IonSelect, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.page.html',
  styleUrls: ['./postjob.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList,ReactiveFormsModule, 
    IonChip, IonItem, IonBackButton, IonButtons, IonText,
    IonThumbnail, IonLabel, IonContent, IonHeader,IonSelectOption 
    ,IonTitle, IonToolbar, CommonModule,IonSelect, FormsModule]

})
export class PostjobPage implements OnInit {

  jobPost: string = '';
  salary:string='';
  type:string=''
  constructor(private route: ActivatedRoute,private router: Router) {
    this.initForm();
   }
  form!: FormGroup;
  ngOnInit() {
    this.jobPost = this.route.snapshot.paramMap.get('jobPost') || '';
    this.type=this.route.snapshot.paramMap.get('type') || '';
    this.salary=this.route.snapshot.paramMap.get('salary') || '';
   
  }

  open(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }else{
    Swal.fire({
      title: 'Submitting',
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
          title: 'Submitted Successfully!',
          icon: 'success',  // Use 'icon' instead of 'type'
          timer: 2000,
          showConfirmButton: false,
          heightAuto: false
        }).then(() => {
          // Navigate after the 'Finished!' alert is closed
          this.form.reset();

          // Optionally, you can reset validation states as well
          this.form.markAsPristine();
          this.form.markAsUntouched();

          this.router.navigateByUrl('/tabs/home');
        });
    
      }})}}

      initForm() {
        this.form = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email]),
          name: new FormControl('', [Validators.required]),
          phoneNumber:new FormControl('', [Validators.required]),
          location:new FormControl('', [Validators.required]),
          post:new FormControl('', [Validators.required]),
          salary:new FormControl('', [Validators.required]),
          qualification:new FormControl(''),
        });
      }
  }


