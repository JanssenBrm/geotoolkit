import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersactionComponent } from './toolboxaction.component';

describe('LayersactionComponent', () => {
  let component: LayersactionComponent;
  let fixture: ComponentFixture<LayersactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
