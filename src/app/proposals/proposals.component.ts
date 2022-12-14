import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

    summits = [
    'Wendelstein 2.555m',
    'Waxenstein 2.333m',
    'Rauschberg 2.222m',
    'Zugspitze 2.999m'
    ];

    regions = [
      'Chiemgau',
      'Salzkammergut',
      'Schongau',
      'Berchtesgadener Land'
    ]

    images = [
    "assets/img/mountains/image7.jpg",
    "assets/img/mountains/image8.jpg",
    "assets/img/mountains/image9.jpg",
    "assets/img/mountains/image10.jpg",
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
