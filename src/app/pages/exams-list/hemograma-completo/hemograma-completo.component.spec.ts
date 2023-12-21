import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemogramaCompletoComponent } from './hemograma-completo.component';

describe('HemogramaCompletoComponent', () => {
  let component: HemogramaCompletoComponent;
  let fixture: ComponentFixture<HemogramaCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HemogramaCompletoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HemogramaCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
