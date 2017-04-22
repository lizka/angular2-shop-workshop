import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promoted-product-list',
  templateUrl: './promoted-product-list.component.html',
  styleUrls: ['./promoted-product-list.component.css']
})
export class PromotedProductListComponent implements OnInit {

  constructor() { }

  @Input() public promoted;
  public title: string = 'Select your fav product:';
  public selectedIndex: number = 0;

  public selectItem(index) {
    this.selectedIndex = index;
  }

  ngOnInit() {

  }

}
