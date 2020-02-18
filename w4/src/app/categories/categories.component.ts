import { Component, OnInit } from '@angular/core';
import {Category, categories} from '../categories';
import {Observable, of} from 'rxjs';
import {Product} from '../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor() { }

  private getCategories(): void {
    of(categories).subscribe(cat => this.categories = cat);
  }

  private getRandomImage(products: Product[]): string {
    return products[Math.floor(Math.random() * products.length)].imagesLinks;
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
