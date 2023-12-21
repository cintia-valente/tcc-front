import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrComponent } from './pcr.component';

describe('PcrComponent', () => {
  let component: PcrComponent;
  let fixture: ComponentFixture<PcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
