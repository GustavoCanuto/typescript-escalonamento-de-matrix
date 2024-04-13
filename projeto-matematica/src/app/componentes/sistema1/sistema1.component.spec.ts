import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sistema1Component } from './sistema1.component';

describe('Sistema1Component', () => {
  let component: Sistema1Component;
  let fixture: ComponentFixture<Sistema1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sistema1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sistema1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
