import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletrocardiogramaComponent } from './eletrocardiograma.component';

describe('EletrocardiogramaComponent', () => {
  let component: EletrocardiogramaComponent;
  let fixture: ComponentFixture<EletrocardiogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EletrocardiogramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EletrocardiogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
