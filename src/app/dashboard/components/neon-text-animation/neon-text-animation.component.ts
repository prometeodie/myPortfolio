import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'neon-text-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neon-text-animation.component.html',
  styleUrls: ['./neon-text-animation.component.scss']
})
export class NeonTextAnimationComponent {
  flickeringClass: boolean = true;


  repeatFlickeringAnimation(){
    this.flickeringClass = false;
    setTimeout(()=>{
      this.flickeringClass = true;
    },5000)
  }

}
