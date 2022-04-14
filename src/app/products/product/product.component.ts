import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'src/app/notifier.service';
import { ProductService } from 'src/app/product.service';
import { IProduto } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private notifier: NotifierService,
    private produtos: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtos.getOne(produtoId);
  }

  addToCart() {
    this.notifier.showNotification("Produto adicionado ao carrinho");
  }
}
