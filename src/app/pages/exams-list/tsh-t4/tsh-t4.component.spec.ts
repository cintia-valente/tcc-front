import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshT4Component } from './tsh-t4.component';

describe('TshT4Component', () => {
  let component: TshT4Component;
  let fixture: ComponentFixture<TshT4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TshT4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
