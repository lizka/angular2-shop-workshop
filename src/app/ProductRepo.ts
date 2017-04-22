import { Injectable } from '@angular/core';
import { Product } from './Product';

// Mozna napisac ze to jest serwis, ale nie trzeba

@Injectable()
export class ProductRepo {
  public getProductList (): Product[] {
    return [
      {name: 'Mobile', desc: 'expensive', price: 800, done: false},
      {name: 'Crayons', desc: 'colorful', price: 10, done: false},
      {name: 'Stickers', desc: 'swag, swag, swag', price: 3, done: false}
    ];
  }
}
