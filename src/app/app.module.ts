import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localPt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantsComponent,
    NotfoundComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ReviewsComponent,
    MenuComponent,
    MenuItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
