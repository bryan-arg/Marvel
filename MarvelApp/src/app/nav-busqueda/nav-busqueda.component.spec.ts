import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBusquedaComponent } from './nav-busqueda.component';

describe('NavBusquedaComponent', () => {
  let component: NavBusquedaComponent;
  let fixture: ComponentFixture<NavBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
