import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  metodoDoCarinho(valor) {
    console.log('metodo do carrinho', valor);
  }

  add(item) {
    this.cart.addItem(item);
  }

  remove(item) {
    this.cart.removeCarrinho(item);
  }

  itemsDoCarrinho() {
    return this.cart.lerDoCarinho();
  }

  limpar() {
    this.cart.limparCarrinho();
  }

  total(): number {
    return this.cart.total();
  }

}
