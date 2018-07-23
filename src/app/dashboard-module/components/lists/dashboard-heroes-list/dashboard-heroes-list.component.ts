import { Hero } from './../../../../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-heroes-list',
  templateUrl: './dashboard-heroes-list.component.html',
  styleUrls: ['./dashboard-heroes-list.component.css']
})
export class DashboardHeroesListComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
