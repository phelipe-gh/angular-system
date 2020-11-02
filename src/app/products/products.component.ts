import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {

    const productsCountLocalStorage = JSON.parse(localStorage.getItem('idsProducts'));

    this.countProducts = productsCountLocalStorage ? productsCountLocalStorage.length : 0;

    this.products = PRODUCTS;

  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
