import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem;

  // sempre estanciar a classe
  // outpud retirar da caixa
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCart(item) {
    this.add.emit(item);
  }

}
