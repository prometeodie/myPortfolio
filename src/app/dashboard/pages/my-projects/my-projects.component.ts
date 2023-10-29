import { Component } from '@angular/core';
import { Projects } from '../../interfaces';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {

  public projects: Projects[] =[

    {
      title:'Warehouse Location',
      subTitle:'You can find the closest warehouse  to a specific location',
      img:'../../../../assets/img/projects/warehouse-location.jpeg',
      paragraph:`This app was built to save warehouses,with their locations and the items that are saved in (items must be saved uploading an excel file,
       also you are able to download the items list as an Excel file).The main utility of this app is to find the 3 closest warehouses to an a specific location
       this functionality is abailable for the admin role, it will show the closes warehouses in a map with markers,
       the app shows the closest warehouse making a polilyne on the map with the best route to arribe it.`
       ,
      chip:['Angular','HTML','Scss','nest','mongoDB','Angular Material','Google Maps'],
      code:'https://github.com/prometeodie/Warehouses-App',
      liveDemo:'https://warehouses-location.vercel.app/auth/login'
    },
    {
      title:'Heroes-App',
      subTitle:'Heroes',
      img:'../../../../assets/img/projects/heroes-app.jpeg',
      paragraph:'this application allows add new heroes, save a picture and information of them,also it allows edit and delete them. It has a search bar where you can search the heroes that are saved in the DB',
      chip:['Angular','HTML','Css','Angular Material','Prime Flex'],
      code:'https://github.com/prometeodie/HeroesApp',
      liveDemo:'https://heroes-app-liart.vercel.app/auth/login'
    },
    {
      title:'Maps-App',
      subTitle:'Map-box app',
      img:'../../../../assets/img/projects/map-box-app.jpeg',
      paragraph:`This app was build with Map-Box library (it's a good alternative to google maps), you can searh for a places, found the best direction to reach it, add/delete markers`,
      chip:['Angular','HTML','Css','Bootstrap','Map-Box'],
      code:'https://github.com/prometeodie/mapsApp',
      liveDemo:'https://maps-app-prometeodie.vercel.app/mapas/mapScreen'
    },
    {
      title:'Portfolio',
      subTitle:'Rick Sanchez',
      img:'../../../../assets/img/projects/rick-portfolio.jpeg',
      paragraph:`It's a portfolio using Java Script Vanilla, 100% functional, responsive. Using the best practices`,
      chip:['Java Script','HTML','Css'],
      code:'https://github.com/prometeodie/Proyecto-cv-Franco.D.Rodriguez',
      liveDemo:'https://prometeodie.github.io/Proyecto-cv-Franco.D.Rodriguez'
    }
  ]

}
