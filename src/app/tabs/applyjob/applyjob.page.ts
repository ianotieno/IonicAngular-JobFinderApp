import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonText, IonButtons, IonBackButton,IonThumbnail, IonItem, IonChip, IonList, IonInput,IonSelectOption,IonSelect, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.page.html',
  styleUrls: ['./applyjob.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList, IonChip, IonItem, IonBackButton, IonButtons, IonText,IonThumbnail, IonLabel, IonContent, IonHeader,IonSelectOption ,IonTitle, IonToolbar, CommonModule,IonSelect, FormsModule]
})
export class ApplyjobPage implements OnInit {
  jobPost: string = '';
  salary:string='';
  type:string=''
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.jobPost = this.route.snapshot.paramMap.get('jobPost') || '';
    this.type=this.route.snapshot.paramMap.get('type') || '';
    this.salary=this.route.snapshot.paramMap.get('salary') || '';
  }

  open(){
    Swal.fire({
      title: 'Logging In',
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
          title: 'Logged In Successfully!',
          icon: 'success',  // Use 'icon' instead of 'type'
          timer: 2000,
          showConfirmButton: false,
          heightAuto: false
        }).then(() => {
          // Navigate after the 'Finished!' alert is closed
          this.router.navigateByUrl('/tabs/home');
        });
    
      }})}

  }

