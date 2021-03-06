import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.pug',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() produtos: {};

  idsProducts: any;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.idsProducts = JSON.parse(localStorage.getItem('idsProducts'));
    this.isLoaded = true;

  }

  addProduct(id: Number) {

    if(this.idsProducts) {
      this.idsProducts.push(id);
    } else {
      this.idsProducts = [id]
    }

    localStorage.setItem('idsProducts', JSON.stringify(this.idsProducts));

  }

  removeProduct(id: Number) {

    this.idsProducts.splice(this.idsProducts.indexOf(id), 1);

    localStorage.setItem('idsProducts', JSON.stringify(this.idsProducts));
  }

  wasAddedListSopping(id: Number) {

    if (!this.idsProducts) return false;

    return this.idsProducts.includes(id);

  }

  setCardSelected(id) {

    return this.wasAddedListSopping(id) ? { border: 'solid #477493' } : {};

  }

}
