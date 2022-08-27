import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mountainCardTexts = [
    'Wendelstein 2.555m',
    'Waxenstein 2.333m',
    'Rauschberg 2.222m',
    'Zugspitze 2.999m',
    'Seceda 2.950m',
    'Rauscherg 1.850m'
  ];

  mountainCardImages = [
    "assets/img/mountains/image1.jpg",
    "assets/img/mountains/image2.jpg",
    "assets/img/mountains/image3.jpg",
    "assets/img/mountains/image4.jpg",
    "assets/img/mountains/image5.jpg",   
    "assets/img/mountains/image6.jpg"
  ]


  buttonClicked() {
    alert('hallo wie gehts dir?')
  }
  
}

