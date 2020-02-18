import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './product';
import {Category, categories} from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  public getProductFromCategory(categoryId: number): Observable<Product[]> {
    return of(categories.find(cat => cat.id === categoryId).products);
  }
}
