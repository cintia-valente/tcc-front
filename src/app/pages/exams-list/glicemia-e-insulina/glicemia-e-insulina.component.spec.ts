import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlicemiaEInsulinaComponent } from './glicemia-e-insulina.component';

describe('GlicemiaEInsulinaComponent', () => {
  let component: GlicemiaEInsulinaComponent;
  let fixture: ComponentFixture<GlicemiaEInsulinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlicemiaEInsulinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlicemiaEInsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
