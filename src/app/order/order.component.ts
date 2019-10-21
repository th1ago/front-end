import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../restaurant-detail/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  constructor(private cart: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      address: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      number: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      complete: this.formBuilder.control('', [Validators.minLength(5), Validators.required])
    });
  }

  enviar() {
    console.log(this.orderForm);
  }

  itemsDoCarrinho() {
    return this.cart.lerDoCarinho();
  }

  total(): number {
    return this.cart.total();
  }

}
