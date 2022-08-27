import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain-card',
  templateUrl: './mountain-card.component.html',
  styleUrls: ['./mountain-card.component.scss']
})
export class MountainCardComponent implements OnInit {
  @Input() text: string = '';
  @Input() image: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
