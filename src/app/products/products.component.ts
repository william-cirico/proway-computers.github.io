import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  produtos: IProduto[] = produtos;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        return
      }            

      this.produtos = produtos;
    });
  }

}
