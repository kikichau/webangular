import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcommantComponent } from './yourcommant.component';

describe('yourcommantComponent', () => {
  let component: YourcommantComponent;
  let fixture: ComponentFixture<YourcommantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourcommantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourcommantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
