import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../seeds/produtos'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.pug',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  countProducts: number = null;
  canLoad: boolean = false;
  products: {};

  constructor() { }

  ngOnInit(): void {

    const productsCountLocalStorage = JSON.parse(localStorage.getItem('idsProducts'));

    this.countProducts = productsCountLocalStorage ? productsCountLocalStorage.length : 0;

    this.products = PRODUCTS;

  }

}
