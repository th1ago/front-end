import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  public detail: any;
  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(result => {
      this.detail = result;
      console.log(result);
    });

  }

}
