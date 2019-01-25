import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatwasComponent } from './tatwas.component';

describe('TatwasComponent', () => {
  let component: TatwasComponent;
  let fixture: ComponentFixture<TatwasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatwasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
