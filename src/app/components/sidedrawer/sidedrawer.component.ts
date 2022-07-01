import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/common/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css'],
})
export class SidedrawerComponent implements OnInit {
  @Input() showSideDrawer: boolean;
  @Output() toggleSidedrawer: EventEmitter<boolean> = new EventEmitter();
  cartItems: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }

  clickIt() {
    this.toggleSidedrawer.emit();
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
