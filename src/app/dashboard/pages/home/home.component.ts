import { AfterViewInit, Component } from '@angular/core';
import { BackGroundText } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public effect: boolean = false;

  public backGroundText: BackGroundText[] =[
    {class:'back-g-text back-g-text--1',text:'<script> </script>'},
    {class:'back-g-text back-g-text--2',text:'console.log()'},
    {class:'back-g-text back-g-text--3',text:'"Hello Word"'},
    {class:'back-g-text back-g-text--4',text:'public'},
    {class:'back-g-text back-g-text--5',text:'private'},
    {class:'back-g-text back-g-text--6',text:'< >'},
    {class:'back-g-text back-g-text--7',text:'debugger'},
    {class:'back-g-text back-g-text--8',text:'background-color: red'}
  ]

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.effect = true;
    },1000)
  }


}
