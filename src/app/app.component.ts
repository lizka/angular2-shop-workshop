import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ProductRepo } from  "./ProductRepo"
import { Product } from './Product'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userPromise: Promise<{ name: string; surname:string }>;
  public promotedItemsPromise: Promise<Array<{}>>;
  // public productListPromise: Promise<Array<{ name: string; desc: string, price: number }>>;

  public productList: Product[];
  public filteredProducts: Product[];

  public query = new FormControl();

  private sort () {
    this.filteredProducts = this.filteredProducts.sort(function compare(a,b) {
      return a.name.localeCompare(b.name);
    });
  }

  constructor(productGetter: ProductRepo) {
    this.productList = productGetter.getProductList();
    this.filteredProducts = this.productList;
    
    this.query.valueChanges.subscribe(queryReturnedFromPromise => {
      this.filteredProducts = this.productList.filter(function(el) {
        return (el.name.indexOf(queryReturnedFromPromise) > -1 || el.desc.indexOf(queryReturnedFromPromise) > -1);
      });
      this.sort();
    });
  }

  public ngOnInit (): void {
    this.userPromise = new Promise((resolve) => {
      setTimeout(
        () => resolve({name: 'liz', surname: ''}), 0
      )
    });

    // this.productListPromise = new Promise((resolve) => {
    //   setTimeout(
    //     () => resolve([
    //       {name: 'kredki', desc: 'kolorowe', price: '10$'},
    //       {name: 'telefony', desc: 'drogie', price: '800$'},
    //       {name: 'naklejki', desc: 'swag, swag, swag', price: '3$'},
    //     ]), 3000
    //   )
    // });

    this.promotedItemsPromise = new Promise((resolve) => {
      setTimeout(
        () => resolve([
          'Crayons',
          'Mobile',
          'Stickers']), 3000
      )
    });
  }
}
