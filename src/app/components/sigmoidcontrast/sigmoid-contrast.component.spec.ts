import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigmoidContrastComponent } from './sigmoid-contrast.component';

describe('MathchartComponent', () => {
  let component: SigmoidContrastComponent;
  let fixture: ComponentFixture<SigmoidContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigmoidContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigmoidContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
