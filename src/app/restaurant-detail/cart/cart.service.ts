import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';
import { CartItem } from 'src/app/model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  addItem(itemDoMenu: MenuItem) {

    const itemExist = this.items.find( (mItem) => mItem.menuItem.id === itemDoMenu.id );

    if (itemExist) {
      this.incrementaItem(itemExist);
    } else {
      this.items.push(new CartItem(itemDoMenu));
    }

    this.total();

  }

  incrementaItem(item: CartItem): void {
    item.quantidade = item.quantidade + 1 ;
  }

  lerDoCarinho(): Array<CartItem> {
    return this.items;
  }

  limparCarrinho(): void {
    this.items = [];
  }

  removeCarrinho(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map( (item) => item.valor())
    .reduce( (prev, value) => prev + value, 0);
  }

  constructor() { }
}
