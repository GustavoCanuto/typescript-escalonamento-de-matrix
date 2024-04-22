import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorMatrixComponent } from './gerador-matrix.component';

describe('GeradorMatrixComponent', () => {
  let component: GeradorMatrixComponent;
  let fixture: ComponentFixture<GeradorMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeradorMatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeradorMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
