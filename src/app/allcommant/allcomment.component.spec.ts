import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcommentComponent } from './allcomment.component';

describe('allcommentComponent', () => {
  let component: AllcommentComponent;
  let fixture: ComponentFixture<AllcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
