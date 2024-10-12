import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,IonChip ,IonBackButton ,IonToolbar, IonButtons, IonIcon, IonRow, IonCol, IonLabel, IonThumbnail,IonText, IonSearchbar, IonButton, IonList, IonListHeader, IonCard, IonItem } from '@ionic/angular/standalone';
import { Service } from 'src/app/Service';
import { UserResponse } from 'src/app/User';
import { addIcons } from 'ionicons';
import { cog, helpBuoyOutline, personAddOutline, chevronForwardOutline, keyOutline, newspaperOutline, mailOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonItem, IonCard, IonListHeader,IonChip , IonList,IonBackButton, IonButton, IonSearchbar, IonText, IonLabel, IonCol, IonRow, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonThumbnail]
})
export class ProfilePage implements OnInit {
  user: UserResponse = { results: [], nationality: '', seed: '', version: '' };
  results: UserResponse | null = null;
  constructor(private service: Service, private cdr: ChangeDetectorRef,private router: Router) { 

    addIcons({cog,chevronForwardOutline,helpBuoyOutline,personAddOutline,keyOutline,newspaperOutline,mailOutline});
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
          console.log('First user:', this.user.results[0].user.picture);
        }
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
  onSubmit(){
    this.router.navigateByUrl('/login');
  }
}
