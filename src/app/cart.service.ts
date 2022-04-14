import { Injectable } from '@angular/core';
import { IProduto } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  itens: IProduto[] = JSON.parse(localStorage.getItem("produtos")!) || [];

  addToCart(produto: IProduto) {
    this.itens.push(produto);
    localStorage.setItem("produtos", JSON.stringify(this.itens));
  }

  getItems() {
    return this.itens;
  }

  clearCart() {
    this.itens = [];
    localStorage.clear();
    return this.itens;
  }
}
