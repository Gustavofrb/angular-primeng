import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NonServiceService } from 'src/app/services/non-service.service';
import { MessageService } from 'primeng/api';
interface CidadesPorEstado {
  [key: string]: string[];
}

@Component({
  selector: 'app-registry-component',
  templateUrl: './registry-component.component.html',
  styleUrls: ['./registry-component.component.scss'],
})
export class RegistryComponentComponent {
  constructor(private nonService: NonServiceService) {}

  estadosBrasileiros: string[] = ['São Paulo', 'Rio de Janeiro'];
  cidadesPorEstado: CidadesPorEstado = {
    'São Paulo': ['São Paulo', 'Campinas', 'Guarulhos', 'Santo André'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
  };
  cidadesDoEstadoSelecionado: string[] = [];

  onSubmit(form: NgForm): void {
    this.nonService.submitForm(form);
  }

 
}
