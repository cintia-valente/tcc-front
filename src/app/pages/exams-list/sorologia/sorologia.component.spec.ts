import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorologiaComponent } from './sorologia.component';

describe('SorologiaComponent', () => {
  let component: SorologiaComponent;
  let fixture: ComponentFixture<SorologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SorologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
