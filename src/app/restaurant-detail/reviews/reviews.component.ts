import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  public reviews: any;
  constructor(
    private router: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.reviewsOfRestaurants(this.router.parent.snapshot.params['id'])
    .subscribe(result => {
      this.reviews = result;
      console.log(this.reviews);
    });
  }

}
