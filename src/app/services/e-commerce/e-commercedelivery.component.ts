import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commercedelivery',
  templateUrl: './e-commercedelivery.component.html',
  styleUrls: ['./e-commercedelivery.component.scss']
})
export class EcommerceDeliveryComponent implements OnInit {
  data : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
