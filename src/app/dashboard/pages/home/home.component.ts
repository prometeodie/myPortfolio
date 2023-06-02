import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public effect: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.effect = true;
    },1000)
  }


}
