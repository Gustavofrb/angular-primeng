import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NonServiceService } from 'src/app/services/non-service.service';

interface CidadesPorEstado {
  [key: string]: string[];
}

@Component({
  selector: 'app-registry-component',
  templateUrl: './registry-component.component.html',
  styleUrls: ['./registry-component.component.scss'],
})
export class RegistryComponentComponent {
  estadosBrasileiros: string[] = ['São Paulo', 'Rio de Janeiro'];
  cidadesPorEstado: CidadesPorEstado = {
    'São Paulo': ['São Paulo', 'Campinas', 'Guarulhos', 'Santo André'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
  };
  cidadesDoEstadoSelecionado: string[] = [];

  constructor(private nonService: NonServiceService) {}

  onStateChange(event: Event): void {
    const selectedState = (event.target as HTMLSelectElement).value;
    if (selectedState) { 
    this.cidadesDoEstadoSelecionado = this.cidadesPorEstado[selectedState];
  } else {
    this.cidadesDoEstadoSelecionado = []; 
  }
}


  onSubmit(form: NgForm): void {
    this.nonService.submitForm(form);
  }
}
