import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-profil-row',
  templateUrl: './profil-row.component.html',
  styleUrls: ['./profil-row.component.scss']
})
export class ProfilRowComponent implements OnInit {
  @Input() summits = "Piz Lischana";
  @Input() regions = "Engadin";
  @Input() images = "/assets/img/mountains/image11.jpg";
  @Input() canAddToFavorite = true;
  

  constructor(public favs: FavoriteService) { }

  ngOnInit(): void {
  }

}
