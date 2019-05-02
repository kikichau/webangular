import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycommentComponent } from './modifycomment.component';

describe('ModifycommentComponent', () => {
  let component: ModifycommentComponent;
  let fixture: ComponentFixture<ModifycommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifycommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifycommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
