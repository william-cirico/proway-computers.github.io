import { Injectable } from '@angular/core';
import { IProduto, produtos } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produtos: IProduto[] = produtos

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return produtos.find(produto => produto.id === produtoId);
  }
}
