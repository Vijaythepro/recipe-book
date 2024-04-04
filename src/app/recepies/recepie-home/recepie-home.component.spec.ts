import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieHomeComponent } from './recepie-home.component';

describe('RecepieHomeComponent', () => {
  let component: RecepieHomeComponent;
  let fixture: ComponentFixture<RecepieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
