import { Component, OnInit } from '@angular/core';

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

    this.products = [
      {
        nome: 'Fifa',
        preco: 199,
        url: '../assets/fifa.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 1
      },
      {
        nome: 'Days gone',
        preco: 69,
        url: '../assets/daysGone.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 2
      },
      {
        nome: 'GTA-V',
        preco: 129,
        url: '../assets/gta.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 3
      },
      {
        nome: 'Crash',
        preco: 139,
        url: '../assets/crash.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 4
      },
      {
        nome: 'Detroid',
        preco: 99,
        url: '../assets/detroid.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 5
      },
      {
        nome: 'PES-2020',
        preco: 79,
        url: '../assets/pes.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 6
      },
      {
        nome: 'GT-Sport',
        preco: 99,
        url: '../assets/granTurism.png',
        compatibilidade: 'PS4',
        id: 7
      },
      {
        nome: 'Spider man',
        preco: 159,
        url: '../assets/spiderMan.png',
        compatibilidade: 'PS4',
        id: 8
      },
      {
        nome: 'Uncharted',
        preco: 99,
        url: '../assets/uncharted.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 10
      },
      {
        nome: 'Cyber Punk',
        preco: 99,
        url: '../assets/cyberPunk.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 11
      },
      {
        nome: 'God Of War',
        preco: 59,
        url: '../assets/godOfWarFour.png',
        compatibilidade: 'PS4',
        id: 12
      },
      {
        nome: 'The Last Of Us',
        preco: 89,
        url: '../assets/theLastOfUs.png',
        compatibilidade: 'PS4 XBOX-ONE',
        id: 13
      }
  ]

  }

}
