import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../../../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  @Input() heroes: Hero[];
  @Input() isDeletingHero: boolean;

  @Output() deleteHero: EventEmitter<Hero> = new EventEmitter<Hero>();

  onDelete(hero: Hero) {
    this.deleteHero.emit(hero);
  }

}
