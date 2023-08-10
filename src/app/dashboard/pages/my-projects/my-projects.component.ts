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
      title:'Portfolio',
      subTitle:'Rick Sanchez',
      img:'../../../../assets/img/projects/Rick Portfolio.png',
      paragraph:`It's a portfolio using Java Script Vanilla, 100% functional, responsive. Using the best practices`,
      chip:['Java Script','HTML','Css'],
      code:'https://github.com/prometeodie/Proyecto-cv-Franco.D.Rodriguez',
      liveDemo:'https://prometeodie.github.io/Proyecto-cv-Franco.D.Rodriguez'
    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish'],
      code:'',
      liveDemo:''
    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish'],
      code:'',
      liveDemo:''
    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish'],
      code:'',
      liveDemo:''
    },
  ]

}
