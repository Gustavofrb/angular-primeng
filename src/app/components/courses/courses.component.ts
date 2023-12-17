import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  cursoCSS = {
    name: 'CSS e HTML - Básico ao Avançado',
    price: 50.0,
  };

  cursoJavaScript = {
    name: 'Fundamentos do JavaScript',
    price: 99.9,
  };

  cursoAngular = {
    name: 'Introdução ao Angular e Arquitetura de Componentes',
    price: 49.9,
  };

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  redirecionarParaHome(): void {
    this.router.navigate(['/home']);
  }

  redirecionarParaCarrinho(): void {
    this.router.navigate(['/carrinho']);
  }

  adicionarAoCarrinho(curso: any) {
    this.carrinhoService.adicionarItem(curso);
    console.log('Item Adicionado');
  }
}
