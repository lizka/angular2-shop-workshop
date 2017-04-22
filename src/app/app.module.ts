import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromotedProductListComponent } from './promoted-product-list/promoted-product-list.component';
import { ProductRepo } from './ProductRepo'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    PromotedProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductRepo],
  bootstrap: [AppComponent]
})
export class AppModule { }
