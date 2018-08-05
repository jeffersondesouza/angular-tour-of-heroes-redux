import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesModulePageComponent } from './heroes-module-page.component';

describe('HeroesModulePageComponent', () => {
  let component: HeroesModulePageComponent;
  let fixture: ComponentFixture<HeroesModulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesModulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesModulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
