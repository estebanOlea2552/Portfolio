import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatitoTextoPrincipalComponent } from './gatito-texto-principal.component';

describe('GatitoTextoPrincipalComponent', () => {
  let component: GatitoTextoPrincipalComponent;
  let fixture: ComponentFixture<GatitoTextoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatitoTextoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatitoTextoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
