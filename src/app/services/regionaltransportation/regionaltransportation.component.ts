import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regionaltransportation',
  templateUrl: './regionaltransportation.component.html',
  styleUrls: ['./regionaltransportation.component.scss']
})
export class RegionalTransportationComponent implements OnInit {
  data : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
