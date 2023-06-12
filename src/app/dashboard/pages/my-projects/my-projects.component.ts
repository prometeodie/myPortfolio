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
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish']

    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish']

    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish']

    },
    {
      title:'Shiba Inu',
      subTitle:'Dog Breed',
      img:'../../../../assets/img/53741-miles-morales.jpg',
      paragraph:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      chip:['one fish','one fish','one fish','one fish']

    },
  ]

}
