import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-night-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-night-animation.component.html',
  styleUrls: ['./day-night-animation.component.scss']
})
export class DayNightAnimationComponent {
  public holes: string[] = [
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--one',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--two',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--tree',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--four',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--five',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--six',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--seven',
    'day-night-animation__window__moon__hole day-night-animation__window__moon__hole--eight'
  ]

  public animationStart:boolean = true;

  animationFinish(){
    this.animationStart = !this.animationStart;
  }

 }
