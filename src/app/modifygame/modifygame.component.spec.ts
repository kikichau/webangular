import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifygameComponent } from './modifygame.component';

describe('ModifygameComponent', () => {
  let component: ModifygameComponent;
  let fixture: ComponentFixture<ModifygameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifygameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
