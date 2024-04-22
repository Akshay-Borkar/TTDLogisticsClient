import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
  data: Date = new Date();
  firstName: string = '';
  lastName: string = '';
  qualification: string = '';
  experience: number | null = null;
  contactNo: string = '';
  email: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  licenseNo: string = '';

  submitForm() {
    // Here you can handle form submission, e.g., sending data to server
    console.log("Form submitted!");
  }
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
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('contact-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-info');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('contact-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-info');
    navbar.classList.add('navbar-transparent');

  }

}
