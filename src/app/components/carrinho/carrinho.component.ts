import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  itensNoCarrinho: any[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.atualizarCarrinho();
  }

  atualizarCarrinho(): void {
    this.itensNoCarrinho = this.carrinhoService.listarItens();
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.carrinhoService.calcularTotal();
  }

  removerDoCarrinho(index: number): void {
    this.carrinhoService.removerItem(index);
    this.atualizarCarrinho();
  }
}
