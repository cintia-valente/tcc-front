import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDeUrinaComponent } from './exame-de-urina.component';

describe('ExameDeUrinaComponent', () => {
  let component: ExameDeUrinaComponent;
  let fixture: ComponentFixture<ExameDeUrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExameDeUrinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExameDeUrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
