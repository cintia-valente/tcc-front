import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteErgometricoComponent } from './teste-ergometrico.component';

describe('TesteErgometricoComponent', () => {
  let component: TesteErgometricoComponent;
  let fixture: ComponentFixture<TesteErgometricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteErgometricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteErgometricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
