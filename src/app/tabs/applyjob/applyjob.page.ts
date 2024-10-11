import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.page.html',
  styleUrls: ['./applyjob.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ApplyjobPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
