import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitometriaOsseaComponent } from './densitometria-ossea.component';

describe('DensitometriaOsseaComponent', () => {
  let component: DensitometriaOsseaComponent;
  let fixture: ComponentFixture<DensitometriaOsseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DensitometriaOsseaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DensitometriaOsseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
