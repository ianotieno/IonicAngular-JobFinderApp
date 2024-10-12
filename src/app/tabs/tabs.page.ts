import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {chatboxEllipsesOutline, heartOutline, homeOutline, personOutline, createOutline } from 'ionicons/icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, IonTab, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor(private router: Router) {
    addIcons({homeOutline,heartOutline,createOutline,personOutline,chatboxEllipsesOutline});
   }

  ngOnInit() {
  }
  profile() {
    this.router.navigateByUrl('tabs/profile');
  }
  home(){
    this.router.navigateByUrl('tabs/home');
  }
  
}
