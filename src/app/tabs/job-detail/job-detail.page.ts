import { IonContent, IonHeader, IonToolbar, IonButtons, IonThumbnail, IonBackButton, IonList, IonItem, IonLabel, IonChip, IonText, IonRow, IonSegment, IonSegmentButton, IonCol, IonFooter, IonButton, IonIcon,IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, bookmarkOutline } from 'ionicons/icons';
import { Service } from 'src/app/Service';



@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonToolbar, IonButtons, IonThumbnail, IonBackButton, IonList, IonItem, IonLabel, IonChip, IonText, IonRow, IonSegment, IonSegmentButton, IonCol, IonFooter, IonButton, IonIcon,IonCard]
})
export class JobDetailPage implements OnInit {

  job: any = {};
  jobs: any[] = [];
  segment_value = 'description';
  bookmark = false;
 

  constructor(private route: ActivatedRoute,private router: Router ) { 
    addIcons({ bookmark, bookmarkOutline });
  }

  ngOnInit() {
    this.jobs = [
      {
        id: 1,
        company: 'Technyks LLC',
        location: 'Nairobi',
        expires_on: '30/11/23',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: '$40-90k/year',
        logo_dark: 'ct_dark.png',
        logo_light: 'ct_light.png',
        image: 'ux.jpg',
        description: ['3 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['Uber Technologies is a global ride-sharing company headquartered in San Francisco.'],
        reviews: ['Innovative projects.', 'Competitive salary and benefits.'],
        about_job: ['This role involves designing user interfaces and experiences for various Technyks products.']
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Mombasa',
        expires_on: '07/12/23',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: '$30-80k/year',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
        image: 'developer.jpg',
        description: ['5 or more years of experience needed as a Senior developer in Full Stack. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['LinkedIn is a professional networking site that allows members to create business connections, search for jobs, and find potential clients.'],
        reviews: ['Supportive team.', 'Flexible work hours.'],
        about_job: ['This role involves developing and maintaining full-stack applications for Uber.']
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Eldoret',
        expires_on: '15/12/23',
        post: 'Lead UX Designer',
        type: 'Full Time',
        salary: '$30-70k/year',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
        image: 'ux2.jpg',
        description: ['4 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['LinkedIn is a professional networking site that allows members to create business connections, search for jobs, and find potential clients.'],
        reviews: ['Supportive team.', 'Flexible work hours.'],
        about_job: ['This role involves leading the design team and creating innovative user experiences for LinkedIn.']
      },
      {
        id: 5,
        company: 'TikTok',
        location: 'Kakamega',
        expires_on: '30/11/23',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: '$40-90k/year',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
        image: 'ux1.jpg',
        description: ['3 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['TikTok is a social media platform for creating, sharing, and discovering short videos.'],
        reviews: ['Fun and dynamic workplace.', 'Opportunities for career growth.'],
        about_job: ['This role involves designing user interfaces and experiences for the TikTok platform.']
      },
      {
        id: 6,
        company: 'Uber Technologies',
        location: 'Mombasa',
        expires_on: '07/12/23',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: '$30-80k/year',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
        image: 'developer.jpg',
        description: ['5 or more years of experience needed as a Senior developer in Full Stack. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['LinkedIn is a professional networking site that allows members to create business connections, search for jobs, and find potential clients.'],
        reviews: ['Supportive team.', 'Flexible work hours.'],
        about_job: ['This role involves developing and maintaining full-stack applications for Uber.']
      },
      {
        id: 7,
        company: 'LinkedIn Corp.',
        location: 'Kisumu',
        expires_on: '15/12/23',
        post: 'Lead UX Designer',
        type: 'Full Time',
        salary: '$30-70k/year',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
        image: 'ux2.jpg',
        description: ['4 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['LinkedIn is a professional networking site that allows members to create business connections, search for jobs, and find potential clients.'],
        reviews: ['Supportive team.', 'Flexible work hours.'],
        about_job: ['This role involves leading the design team and creating innovative user experiences for LinkedIn.']
      },
      {
        id: 8,
        company: 'TikTok',
        location: 'Nairobi',
        expires_on: '30/11/23',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: '$40-90k/year',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
        image: 'ux1.jpg',
        description: ['3 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'],
        company_info: ['TikTok is a social media platform for creating, sharing, and discovering short videos.'],
        reviews: ['Fun and dynamic workplace.', 'Opportunities for career growth.'],
        about_job: ['This role involves designing user interfaces and experiences for the TikTok platform.']
      },
    ];
  

    const id = this.route.snapshot.paramMap.get('id');
    const job = this.jobs.find(x => x.id == id);
    if(job) {
      this.job = job;
    }
  
  }

  changeSegment(event: any) {
    console.log(event);
    this.segment_value = event.detail.value;
  }

  toggleBookmark() {
    this.bookmark = !this.bookmark;
  }
  
  open() {
    this.router.navigateByUrl(`tabs/applyjob/${encodeURIComponent(this.job.post)}/${encodeURIComponent(this.job.salary)}/${encodeURIComponent(this.job.type)}`);
  }
  

}
