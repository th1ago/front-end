import { OrderComponent } from './order/order.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/aboutmodule#AboutModule'},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
  children: [
    {path: 'reviews', component: ReviewsComponent},
    {path: 'menu', component: MenuComponent}
  ]
  },
  {path: 'order', loadChildren: './order/ordermodule#OrderModule'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
