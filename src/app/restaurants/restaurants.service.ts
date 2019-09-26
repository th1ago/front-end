import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor( private http: HttpClient) { }

  listaRestaurantes() {
    return this.http.get('http://localhost:3000/restaurants');
  }

  restaurantsById(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}`);
  }

  reviewsOfRestaurants(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/reviews`);
  }

  menuOfRestaurants(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/menu`);
  }
}
