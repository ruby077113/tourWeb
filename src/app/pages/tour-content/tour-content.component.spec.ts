import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourContentComponent } from './tour-content.component';

describe('TourContentComponent', () => {
  let component: TourContentComponent;
  let fixture: ComponentFixture<TourContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
