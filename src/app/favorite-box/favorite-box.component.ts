import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite-box',
  templateUrl: './favorite-box.component.html',
  styleUrls: ['./favorite-box.component.scss']
})
export class FavoriteBoxComponent implements OnInit {

  
  constructor(public favs: FavoriteService) { }

  ngOnInit(): void {
  }

}
