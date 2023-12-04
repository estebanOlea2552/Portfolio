import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatitoTextoSecundarioComponent } from './gatito-texto-secundario.component';

describe('GatitoTextoSecundarioComponent', () => {
  let component: GatitoTextoSecundarioComponent;
  let fixture: ComponentFixture<GatitoTextoSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatitoTextoSecundarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatitoTextoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
