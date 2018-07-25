import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  @Input() heroes: Hero[];


}
