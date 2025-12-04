import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recetario } from './recetario';

describe('Recetario', () => {
  let component: Recetario;
  let fixture: ComponentFixture<Recetario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recetario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recetario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
