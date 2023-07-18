import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonTextAnimationComponent } from './neon-text-animation.component';

describe('NeonTextAnimationComponent', () => {
  let component: NeonTextAnimationComponent;
  let fixture: ComponentFixture<NeonTextAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NeonTextAnimationComponent]
    });
    fixture = TestBed.createComponent(NeonTextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
