import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifynameComponent } from './modifyname.component';

describe('ModifynameComponent', () => {
  let component: ModifynameComponent;
  let fixture: ComponentFixture<ModifynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
