import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonIcon, IonRow, IonCol, IonText, IonLabel, IonSearchbar, IonButton, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';
import { IonicSlides } from '@ionic/angular';
import { JobComponent } from 'src/app/components/job/job.component';
import { Router, RouterModule } from '@angular/router';
import { Service } from 'src/app/Service';
import { UserResponse } from 'src/app/User';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonIcon, IonRow, IonCol, IonText, IonLabel, IonSearchbar, IonButton, IonList, IonListHeader,
    JobComponent,
    RouterModule,
    CommonModule // Add CommonModule to the imports
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  popular: any[] = [{ id: 1, company: 'Technyks LLC', location: 'Nairobi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png' },
  { id: 2, company: 'Uber Technologies', location: 'Mombasa', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
  { id: 3, company: 'LinkedIn Corp.', location: 'Eldoret', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
];
  recent: any[] = [];
  filteredPopular: any[] = [];
  filteredRecent: any[] = [];
  user: UserResponse = { results: [], nationality: '', seed: '', version: '' };
  results: UserResponse | null = null;
  greetingMessage: string = '';
  showAllRecent: boolean = false;
  constructor(private service: Service, private cdr: ChangeDetectorRef,private router: Router) {
    addIcons({ appsOutline, options });
    this.filteredPopular = this.popular;
    this.filteredRecent = this.recent;
    
  }

  ngOnInit() {
    this.popular = [
      { id: 1, company: 'Technyks LLC', location: 'Nairobi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png' },
      { id: 2, company: 'Uber Technologies', location: 'Mombasa', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Eldoret', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
    this.recent = [
      { id: 4, company: 'TikTok', location: 'Kakamega', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' },
      { id: 2, company: 'Uber Technologies', location: 'Mombasa', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Eldoret', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    
      { id: 5, company: 'TikTok', location: 'Kakamega', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' },
      { id: 6, company: 'Uber Technologies', location: 'Mombasa', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 7, company: 'LinkedIn Corp.', location: 'Eldoret', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    
    ];
    this.getuser();
    this.setGreetingMessage();
    this.filteredPopular = this.popular;
    this.filteredRecent = this.recent;
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

  setGreetingMessage() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greetingMessage = 'Good Morning';
    } else if (currentHour < 18) {
      this.greetingMessage = 'Good Afternoon';
    } else {
      this.greetingMessage = 'Good Evening';
    }
  }
  profile(){
    this.router.navigateByUrl('tabs/profile');
  }
  toggleShowAllRecent() {
    this.showAllRecent = !this.showAllRecent;
  }
  filterJobs(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Search term:', searchTerm);
  
    if (!searchTerm) {
      this.filteredPopular = this.popular;
      this.filteredRecent = this.recent;
    } else {
      this.filteredPopular = this.popular.filter(job =>
        job.post.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm)
      );
  
      this.filteredRecent = this.recent.filter(job =>
        job.post.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm)
      );
    }
  
    console.log('Filtered Popular:', this.filteredPopular);
    console.log('Filtered Recent:', this.filteredRecent);
  
    this.cdr.detectChanges();
  }
  trackById(index: number, job: any): number {
    return job.id;
  }
  
  
}
