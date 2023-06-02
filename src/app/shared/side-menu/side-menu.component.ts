import { Component } from '@angular/core';
import { Menu } from 'src/app/dashboard/interfaces';

@Component({
  selector: 'component-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  menu: Menu[]=[
      {route:'portfolio/home'    , class:'menu__icon fa-solid fa-house'},
      {route:'portfolio/about-me', class:'menu__icon fa-solid fa-user-secret'},
      {route:'portfolio/contact' , class:'menu__icon fa-solid fa-code'},
      {route:'portfolio/projects', class:'menu__icon fa-solid fa-envelope'}
  ]

  socialMedia:Menu[]=[
    {route:'https://www.linkedin.com/in/franco-rodriguez-b121491b8/', class:'menu__icon menu__icon-social fa-brands fa-linkedin'},
    {route:'https://github.com/prometeodie?tab=repositories', class:'menu__icon menu__icon-social fa-brands fa-github'}
  ]


}
