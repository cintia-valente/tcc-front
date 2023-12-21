import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapanicolauComponent } from './papanicolau.component';

describe('PapanicolauComponent', () => {
  let component: PapanicolauComponent;
  let fixture: ComponentFixture<PapanicolauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapanicolauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PapanicolauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
