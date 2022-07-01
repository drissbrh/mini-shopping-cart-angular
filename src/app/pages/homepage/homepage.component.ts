import { Component, OnInit } from '@angular/core';
import { map, pipe, switchMap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Sneaker } from '../../common/sneaker';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  sneakers: Sneaker[] | null = null;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getSneakers();
  }

  private getSneakers() {
    this.productService
      .getAllSneakers()
      .pipe()
      .subscribe((data) => {
        this.sneakers = data;
      });
  }
}
