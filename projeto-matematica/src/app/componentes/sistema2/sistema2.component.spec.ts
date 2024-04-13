import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sistema2Component } from './sistema2.component';

describe('Sistema2Component', () => {
  let component: Sistema2Component;
  let fixture: ComponentFixture<Sistema2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sistema2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sistema2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
