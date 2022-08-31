import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
    summits:string[] = [ ];

    regions:string[] = [ ];

    images:string[] = [ ];

  constructor() { }


  addFavorite(summit:string, region:string, image:string) {
      this.summits.push(summit);
      this.regions.push(region);
      this.images.push(image)
  }
}
