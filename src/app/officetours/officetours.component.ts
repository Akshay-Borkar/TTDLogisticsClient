import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officetours',
  templateUrl: './officetours.component.html',
  styleUrls: ['./officetours.component.scss']
})
export class OfficeToursComponent implements OnInit {
  data : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
