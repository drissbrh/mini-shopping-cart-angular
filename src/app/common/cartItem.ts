import { Sneaker } from './sneaker';

export class CartItem {
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(sneaker: Sneaker) {
    this.id = sneaker._id;
    this.name = sneaker.name;
    this.imageUrl = sneaker.media;
    this.unitPrice = sneaker.retailPrice;
    this.quantity = 1;
  }
}
