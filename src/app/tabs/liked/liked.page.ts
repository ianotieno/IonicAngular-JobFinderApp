import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonHeader, IonToolbar, IonButtons, IonThumbnail, IonBackButton, IonList, IonItem, IonLabel, IonChip, IonText, IonRow, IonSegment, IonSegmentButton, IonCol, IonFooter, IonButton, IonIcon,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonListHeader, IonFab, IonFabButton, IonAvatar, IonDatetime, IonModal, IonTitle, IonCheckbox } from '@ionic/angular/standalone';
import { UserResponse } from 'src/app/User';
import { Service } from 'src/app/Service';
import { addIcons } from 'ionicons';
import { add, addOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonTitle, IonModal, IonDatetime, IonAvatar, 
    IonFabButton, IonFab, IonListHeader, 
    IonCardContent, IonCardTitle, IonCardHeader,
    IonContent, IonHeader, IonToolbar, IonButtons, 
    IonThumbnail, IonBackButton, IonList, IonItem, 
    IonLabel, IonChip, IonText, IonRow, IonSegment,
    CommonModule, IonSegmentButton, IonCol, IonFooter,
     IonButton, IonIcon,IonCard,FormsModule]
})
export class LikedPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal |any ;
  user: UserResponse = { results: [], nationality: '', seed: '', version: '' };
  results: UserResponse | null = null;
  showAllRecent: boolean = false;
  selectedUser: any = null;
  activeSegment: string = 'details';
  
  presentingElement = undefined;
  constructor(private service: Service,private router: Router, private cdr: ChangeDetectorRef,private actionSheetCtrl: ActionSheetController) { 

    addIcons({addOutline,});
  }

  ngOnInit() {
    this.getuser();
  }
  getuser() {
    this.service.getUser().subscribe(
      (data: UserResponse) => {
        this.user = data;
        console.log('Fetched users:', this.user);
        if (this.user.results.length > 0) {
          console.log('First user:', this.user.results[4]);
        }
        this.cdr.detectChanges(); // Manually trigger change detection
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
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    if (ev.detail.checked) {
      const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB'); // This will format as 'dd/mm/yyyy'.

      Swal.fire({
        title:`Booking Slot for ${formattedDate}`,
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
          // Display 'Submitted Successfully!' SweetAlert
          Swal.fire({
            title: 'Slot Booked Successfully!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            heightAuto: false
          }).then(() => {
            this.router.navigateByUrl('/tabs/liked')
          });
      
        }
      });
    }
  }
  

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
