import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cartItem';
import { Sneaker } from 'src/app/common/sneaker';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sneakerpage',
  templateUrl: './sneakerpage.component.html',
  styleUrls: ['./sneakerpage.component.css'],
})
export class SneakerpageComponent implements OnInit {
  sneaker: Sneaker = new Sneaker();
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getSneaker(id);
    });
  }

  getSneaker(id: string) {
    this.productService.getASneaker(id).subscribe((data) => {
      this.sneaker = data;
    });
  }

  addToCartHandler() {
    const cartItem = new CartItem(this.sneaker);
    this.cartService.addToCart(cartItem);
  }
}
