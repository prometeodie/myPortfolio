import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBars } from '../../interfaces';

@Component({
  selector: 'dev-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dev-animation.component.html',
  styleUrls: ['./dev-animation.component.scss']
})
export class DevAnimationComponent {
  public barsAmount: number = 12;
  private barCommonClasses: string = 'dev-animation__img__bar dev-animation__img__bar--margin dev-animation__img__bar--coloful'

  public animatedBars: BlockBars[] = [
    {
      container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-1',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--big`,
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--medium`
      ]
    },
    {container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-2',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--big`,
        `${this.barCommonClasses} dev-animation__img__bar--short`
      ]
  },
    {container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-3',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--big`
      ]
  },
    {container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-4',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--big`,
        `${this.barCommonClasses} dev-animation__img__bar--big`,
      ]
  },
    {container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-5',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--big`
      ]
  },
    {container:'dev-animation__img__animated-bars',
      block:'dev-animation__img__animated-bars__block-container dev-animation__img__animated-bars__block-6',
      bars:[
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--short`,
        `${this.barCommonClasses} dev-animation__img__bar--big`,
        `${this.barCommonClasses} dev-animation__img__bar--short`
      ]
  }
  ]





}
