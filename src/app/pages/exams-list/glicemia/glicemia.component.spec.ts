import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlicemiaComponent } from './glicemia.component';

describe('GlicemiaComponent', () => {
  let component: GlicemiaComponent;
  let fixture: ComponentFixture<GlicemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlicemiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlicemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
