import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerselectionComponent } from './layerselection.component';

describe('LayerselectionComponent', () => {
  let component: LayerselectionComponent;
  let fixture: ComponentFixture<LayerselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
