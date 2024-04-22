import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sistema3Component } from './sistema3.component';

describe('Sistema3Component', () => {
  let component: Sistema3Component;
  let fixture: ComponentFixture<Sistema3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sistema3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sistema3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
