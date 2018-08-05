import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRootRoutesComponent } from './private-root-routes.component';

describe('PrivateRootRoutesComponent', () => {
  let component: PrivateRootRoutesComponent;
  let fixture: ComponentFixture<PrivateRootRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRootRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRootRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
