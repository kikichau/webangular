import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourgameComponent } from './yourgame.component';

describe('YourgameComponent', () => {
  let component: YourgameComponent;
  let fixture: ComponentFixture<YourgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
