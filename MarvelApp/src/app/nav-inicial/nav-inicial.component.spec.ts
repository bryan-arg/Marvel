import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInicialComponent } from './nav-inicial.component';

describe('NavInicialComponent', () => {
  let component: NavInicialComponent;
  let fixture: ComponentFixture<NavInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
