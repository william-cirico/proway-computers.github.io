import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtosCarrinho = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg", quantidadeEstoque: 10, quantidade: 2 },
    { id: 2, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/mouse-3.jpg", quantidadeEstoque: 10, quantidade: 1 },
  ];

  diferencasCarrinho = KeyValueDiffers;

  total = 0

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = this.produtosCarrinho.reduce((prev, curr) => prev + curr.preco * curr.quantidade, 0)
  }

  removerProduto(produtoId: number) {
    this.produtosCarrinho = this.produtosCarrinho.filter(produto => produto.id != produtoId)
    this.calcularTotal();
  }

  comprar() {
    alert("Você comprou os produtos!");
    this.cartService.clearCart();
    this.router.navigate(["produtos"])
  }
}
