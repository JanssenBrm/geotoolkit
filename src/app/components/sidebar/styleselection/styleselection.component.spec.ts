import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleselectionComponent } from './styleselection.component';

describe('StyleselectionComponent', () => {
  let component: StyleselectionComponent;
  let fixture: ComponentFixture<StyleselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
