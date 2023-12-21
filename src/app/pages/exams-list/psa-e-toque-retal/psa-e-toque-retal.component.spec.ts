import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaEToqueRetalComponent } from './psa-e-toque-retal.component';

describe('PsaEToqueRetalComponent', () => {
  let component: PsaEToqueRetalComponent;
  let fixture: ComponentFixture<PsaEToqueRetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsaEToqueRetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsaEToqueRetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
