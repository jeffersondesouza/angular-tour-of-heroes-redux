import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../../../../hero';

@Component({
  selector: 'app-hero-detail-ui',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  @Output() goBack: EventEmitter<boolean> = new EventEmitter();
  @Output() heroSaved: EventEmitter<Hero> = new EventEmitter();

  onGoBack() {
    this.goBack.emit(true);
  }

  onSave() {
    this.heroSaved.emit(this.hero);
  }

}
