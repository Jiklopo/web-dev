import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {CategoryService} from '../category.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  private getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('categoryId');
    this.categoryService.getProductsFromCategory(id).subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
