import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/common/cartItem';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() removeEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem() {
    this.removeEmitter.emit();
  }
}
