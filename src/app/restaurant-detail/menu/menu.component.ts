import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public menu: any;

  constructor( private restaurantsService: RestaurantsService, private router: ActivatedRoute ) {
    let id = this.router.parent.snapshot.params['id'];
    this.restaurantsService.menuOfRestaurants(id)
    .subscribe( result => {
      this.menu = result;
      console.log(this.menu);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  responde(item) {
    console.log(item);
  }
}
