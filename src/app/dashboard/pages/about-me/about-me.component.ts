import { Component, OnInit } from '@angular/core';
import { Icon } from '../../interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{
  public yearsOld:number = 0
  private currentYear!: Date;
  public skillsIcons: Icon[] = [
    {name:'JavaScript',path:'about-me__text__skills__icon fa-brands fa-square-js'},
    {name:'Css 3',path:'about-me__text__skills__icon fa-brands fa-css3-alt'},
    {name:'Html 5',path:'about-me__text__skills__icon fa-brands fa-html5'},
    {name:'Angular',path:'about-me__text__skills__icon fa-brands fa-angular'},
    {name:'Sass',path:'about-me__text__skills__icon fa-brands fa-sass'},
    {name:'Git',path:'about-me__text__skills__icon fa-brands fa-git-alt'},
    {name:'Git-Hub',path:'about-me__text__skills__icon fa-brands fa-github'},
  ];

  public skillsIconsSvg: Icon[] = [
    {name:'TypeScript',class:'re-sizing-icons',path:'../../../../assets/svg/icons8-typescript.svg'},
    {name:'RxJs',class:'re-sizing-icons',path:'../../../../assets/svg/RxJs_Logo_Black.svg'}
  ]

  public courses :string[] = [
    'JavaScript: de cero hasta los detalles (ES5) | 2020 |Fernando Herrera',
    'Udemy Angular Course: de cero a  experto | 2021 |Fernando Herrera',
    'Se Programa ⏐Sep. - Nov. 2022 ',
    'Argentina Programa ⏐Nov. 2022 - Feb. 2023',
    'Udemy RXJS Course ReactiveX - RxJs: De cero hasta los detalles | 2023 |Fernando Herrera'
  ]


  ngOnInit(): void {
    this.currentYear=new Date();
    this.getYears();
  }


  getYears():void{
    const currentDay = this.currentYear.getDate();
    const currentMonth = this.currentYear.getDay();
    const currentYear = this.currentYear.getFullYear();

    if(currentMonth < 6)   this.yearsOld = currentYear - 1992-1;
    else {
      if(currentMonth > 6)   this.yearsOld = currentYear - 1992;
      else{
        if(currentMonth === 6) {
          if(currentDay < 13){
            this.yearsOld = currentYear - 1992-1;
          }else{
            this.yearsOld = currentYear - 1992;
          }
      }

    }}
}

}
