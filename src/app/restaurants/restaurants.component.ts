import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  public listRestaurants: any;

  constructor( private negocioRestaurant: RestaurantsService) {
    this.negocioRestaurant.listaRestaurantes().subscribe( result => {
      this.listRestaurants = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
