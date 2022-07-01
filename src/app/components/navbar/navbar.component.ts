import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/common/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() bigBlackEmitter = new EventEmitter();
  cartItems: CartItem[];
  totalQuantity: number = 0;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }

  bigBlack() {
    this.bigBlackEmitter.emit();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );

    this.cartService.computeCartTotals();
  }
}
