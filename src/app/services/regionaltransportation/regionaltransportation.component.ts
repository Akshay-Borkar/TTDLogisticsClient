import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regionaltransportation',
  templateUrl: './regionaltransportation.component.html',
  styleUrls: ['./regionaltransportation.component.scss']
})
export class RegionalTransportationComponent implements OnInit {
  data : Date = new Date();
  constructor() { }
  openInstagramLink() {
    const instagramUrl = 'https://www.instagram.com/ttd_logistics_01'; // Replace with your Instagram profile URL
    window.open(instagramUrl, '_blank');
  }
  openFacebook(): void {
    // Replace 'https://www.facebook.com/your_facebook_page' with your actual Facebook page URL
    window.open('https://www.facebook.com/profile.php?id=61557136036189', '_blank');
  }
  openYouTubeLink() {
    const youtubeLink = 'https://youtube.com/@TTDLogisticsPvt.Ltd.?si=DiGfKLnTQHOkJjp0';
    window.open(youtubeLink, '_blank');
  }
  openLinkedInProfile() {
    window.open('https://www.linkedin.com/company/102284367/admin/feed/posts/', '_blank');
  }
  ngOnInit() {
  }

}
