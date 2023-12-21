import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipidogramaComponent } from './lipidograma.component';

describe('LipidogramaComponent', () => {
  let component: LipidogramaComponent;
  let fixture: ComponentFixture<LipidogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipidogramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LipidogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
