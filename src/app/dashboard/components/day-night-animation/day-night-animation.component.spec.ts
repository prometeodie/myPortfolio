import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNightAnimationComponent } from './day-night-animation.component';

describe('DayNightAnimationComponent', () => {
  let component: DayNightAnimationComponent;
  let fixture: ComponentFixture<DayNightAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DayNightAnimationComponent]
    });
    fixture = TestBed.createComponent(DayNightAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
