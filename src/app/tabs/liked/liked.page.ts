import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonModal, IonHeader, IonCard, IonCardContent,IonThumbnail ,IonIcon, IonAvatar, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonFab, IonText, IonListHeader, IonToolbar, IonButtons, IonBackButton, IonFabButton, IonRefresherContent, IonRefresher } from '@ionic/angular/standalone';
import { UserResponse } from 'src/app/User';
import { Service } from 'src/app/Service';
import { addIcons } from 'ionicons';
import { addOutline, cog, logOut, logOutOutline } from 'ionicons/icons';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { IonInputAccessorModule } from 'src/app/ion-input-accessor.module';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
  standalone: true,
  imports: [IonRefresher, IonRefresherContent, IonFabButton,IonThumbnail, IonBackButton,
     IonButtons,  IonInputAccessorModule,IonToolbar, IonListHeader, IonText, IonFab, IonCheckbox, IonLabel, IonItem, IonList, IonButton, IonAvatar, IonIcon, IonCardContent, IonCard, IonHeader, IonModal, IonContent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LikedPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any;
  user: UserResponse = { results: [], nationality: '', seed: '', version: '' };
  results: UserResponse | null = null;
  showAllRecent = false;
  selectedUser: any = null;
  activeSegment = 'details';
  
  isFormModalOpen = false;
  presentingElement: any = undefined;

  form!: FormGroup;
  myGroup!:FormGroup;
  constructor(
    private service: Service,
    private cdr: ChangeDetectorRef,

  ) {
  
    addIcons({ logOutOutline, addOutline, logOut, cog });
  }

  ngOnInit() {
    this.initForm1();
    this.getuser();
  }

  getuser() {
    this.service.getUser().subscribe(
      (data: UserResponse) => {
        this.user = data;
        console.log('Fetched users:', this.user);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  toggleShowAllRecent() {
    this.showAllRecent = !this.showAllRecent;
  }

  setSelectedUser(user: any) {
    this.selectedUser = user;
  }

  closeModal() {
    this.modal.dismiss();
  }

  openFormModal() {
    this.isFormModalOpen = true;
    this.cdr.detectChanges();
  }

  closeFormModal() {
    this.isFormModalOpen = false;
    this.cdr.detectChanges();
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    if (ev.detail.checked) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-GB');

      Swal.fire({
        title: `Booking Slot for ${formattedDate}`,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        heightAuto: false,
        didOpen: () => {
          Swal.showLoading();
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: 'Slot Booked Successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            heightAuto: false
          }).then(() => {
            this.closeModal()
          });
        }
      });
    }
  }

  open() {
    if (this.myGroup.invalid) {
      this.myGroup.markAllAsTouched();
      return;
    }
    
    Swal.fire({
      title: 'Submitting',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: 'Submitted Successfully!',
          text: 'You will receive an email shortly.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          heightAuto: false
        }).then(() => {
          this.myGroup.reset();
          this.myGroup.markAsUntouched();
         this. closeFormModal()
        });
      }
    });
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      pay: new FormControl('', [Validators.required]),
      qualification: new FormControl(''),
      experience: new FormControl('', [Validators.required]) // Add this line
    });
  }
  
  initForm1(){
    this.myGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      location: new FormControl(''),
      pay: new FormControl(''),
      experience: new FormControl('')
});} 

doRefresh(event: any) {
  this.getuser();  // Re-fetch the user data
  setTimeout(() => {
    event.target.complete();  // Complete the refresh action after data is loaded
  }, 1500);  // Optional delay to simulate loading time
}
          
  }

