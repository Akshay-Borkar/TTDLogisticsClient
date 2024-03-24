import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evehiclechargingservicestation',
  templateUrl: './evehiclechargingservicestation.component.html',
  styleUrls: ['./evehiclechargingservicestation.component.scss']
})
export class EvehicleChargingServicestationComponent implements OnInit {
  data : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
