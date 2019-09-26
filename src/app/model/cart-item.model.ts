import { MenuItem } from 'src/app/model/menu-item.model';

export class CartItem {
  constructor(public menuItem: MenuItem, public quantidade: number = 1) {

  }

  valor(): number {
    return this.menuItem.price * this.quantidade;
  }

}
