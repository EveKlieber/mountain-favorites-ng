import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
    summits = ['Wendelstein 2.555m'];

    regions = [ 'Chiemgau']

    images = [ "assets/img/mountains/image7.jpg" ]

  constructor() { }


  addFavorite(summit:string, region:string, image:string) {
      this.summits.push(summit);
      this.regions.push(region);
      this.images.push(image)
  }
}
