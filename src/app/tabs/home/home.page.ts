import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonIcon, IonRow, IonCol, IonText, IonLabel, IonSearchbar, IonButton, IonList, IonListHeader, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports:[IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonIcon, IonRow, IonCol, IonText, IonLabel, IonSearchbar, IonButton, IonList, IonListHeader],
})
export class HomePage implements OnInit {

  constructor(
   
  ) { addIcons({appsOutline,options}) }

  ngOnInit() {
  }

}
