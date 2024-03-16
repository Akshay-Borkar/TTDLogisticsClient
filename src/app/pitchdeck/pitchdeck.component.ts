import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitchdeck',
  templateUrl: './pitchdeck.component.html',
  styleUrls: ['./pitchdeck.component.scss']
})
export class PitchDeckComponent implements OnInit {
  data : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
