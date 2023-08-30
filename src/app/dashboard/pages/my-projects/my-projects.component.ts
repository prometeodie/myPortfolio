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
      paragraph:`This app was built to save warehouses,with their locations,and the items that are saved in (items must be saved uploading an excel file,
       also you are able to download the items list as an Excel file).The main utility of this app is to find the 3 closest warehouses to an a specific location
       this functionality is abailable for the admin role, it will show the closes warehouses in a map with markers,
       the app shows the closest warehouse making a polilyne on the map with the best route to arribe it.`
       ,
      chip:['Angular','HTML','scss','nest','mongoDB','Angular Material','Google Maps'],
      code:'https://github.com/prometeodie/Warehouses-App',
      liveDemo:'https://warehouse-location.vercel.app/auth/login'
    },
    {
      title:'Portfolio',
      subTitle:'Rick Sanchez',
      img:'../../../../assets/img/projects/rick-portfolio.jpeg',
      paragraph:`It's a portfolio using Java Script Vanilla, 100% functional, responsive. Using the best practices`,
      chip:['Java Script','HTML','Css'],
      code:'https://github.com/prometeodie/Proyecto-cv-Franco.D.Rodriguez',
      liveDemo:'https://prometeodie.github.io/Proyecto-cv-Franco.D.Rodriguez'
    },
    // {
    //   title:'Heroes App',
    //   subTitle:'',
    //   img:'../../../../assets/img/53741-miles-morales.jpg',
    //   paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    //   chip:['one fish','one fish','one fish','one fish'],
    //   code:'',
    //   liveDemo:''
    // },
    // {
    //   title:'Shiba Inu',
    //   subTitle:'Dog Breed',
    //   img:'../../../../assets/img/53741-miles-morales.jpg',
    //   paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    //   chip:['one fish','one fish','one fish','one fish'],
    //   code:'',
    //   liveDemo:''
    // },
  ]

}
