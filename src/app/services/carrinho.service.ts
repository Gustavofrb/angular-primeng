import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: any[] = [];
  


  adicionarItem(item: any) {
    console.log('adicionado');
    this.itens.push(item);
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
  }

  listarItens() {
    return this.itens;
  }

  calcularTotal() {
    let total = 0;
    for (const item of this.itens) {
      if (
        item &&
        typeof item === 'object' &&
        'price' in item &&
        typeof item.price === 'number'
      ) {
        total += item.price;
      }
    }
    return total;
  }
}
