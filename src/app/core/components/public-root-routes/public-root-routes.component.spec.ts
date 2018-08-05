import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRootRoutesComponent } from './public-root-routes.component';

describe('PublicRootRoutesComponent', () => {
  let component: PublicRootRoutesComponent;
  let fixture: ComponentFixture<PublicRootRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicRootRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRootRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
