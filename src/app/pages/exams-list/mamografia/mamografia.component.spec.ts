import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamografiaComponent } from './mamografia.component';

describe('MamografiaComponent', () => {
  let component: MamografiaComponent;
  let fixture: ComponentFixture<MamografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MamografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
