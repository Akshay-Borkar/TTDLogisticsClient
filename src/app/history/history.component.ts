import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  data : Date = new Date();
  constructor() { }
  date : Date = new Date();
  ngOnInit() {
  }

}
