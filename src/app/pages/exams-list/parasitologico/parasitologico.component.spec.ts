import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasitologicoComponent } from './parasitologico.component';

describe('ParasitologicoComponent', () => {
  let component: ParasitologicoComponent;
  let fixture: ComponentFixture<ParasitologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParasitologicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParasitologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
