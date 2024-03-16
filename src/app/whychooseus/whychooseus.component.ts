import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whychooseus',
  templateUrl: './whychooseus.component.html',
  styleUrls: ['./whychooseus.component.scss']
})
export class WhyChooseUSComponent implements OnInit {
  data : Date = new Date();
  constructor() { }
  date : Date = new Date();
  ngOnInit() {
  }

}
