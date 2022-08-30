import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
    summits = [ "" ];

    regions = [ "" ];

    images = [ "" ];

  constructor() { }


  addFavorite(summit:string, region:string, image:string) {
      this.summits.push(summit);
      this.regions.push(region);
      this.images.push(image)
  }
}
