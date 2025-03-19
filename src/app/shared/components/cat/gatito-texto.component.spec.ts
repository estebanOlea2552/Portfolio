import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatitoTextoComponent } from './gatito-texto.component';

describe('GatitoTextoComponent', () => {
  let component: GatitoTextoComponent;
  let fixture: ComponentFixture<GatitoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatitoTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatitoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
