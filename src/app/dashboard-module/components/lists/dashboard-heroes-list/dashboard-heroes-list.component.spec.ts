import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroesListComponent } from './dashboard-heroes-list.component';

describe('DashboardHeroesListComponent', () => {
  let component: DashboardHeroesListComponent;
  let fixture: ComponentFixture<DashboardHeroesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
