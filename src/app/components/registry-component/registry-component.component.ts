import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Adicione a importação do HttpClient
import { Observable } from 'rxjs';

type CidadesPorEstado = {
  [key: string]: string[];
};

@Component({
  selector: 'app-registry-component',
  templateUrl: './registry-component.component.html',
  styleUrls: ['./registry-component.component.scss']
})
export class RegistryComponentComponent {

  estadosBrasileiros = ['São Paulo', 'Rio de Janeiro'];
  cidadesPorEstado: CidadesPorEstado = {
    'São Paulo': ['São Paulo', 'Campinas', 'Guarulhos', 'Santo André'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
  };
  cidadesDoEstadoSelecionado: string[] = [];

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', credentials);
  }
  onStateChange(event: Event): void {
    const selectedState = (event.target as HTMLSelectElement).value;
    this.cidadesDoEstadoSelecionado = this.cidadesPorEstado[selectedState] || [];
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      this.http.post('http://localhost:3000/login', formData)
        .subscribe(
          (response) => {
            console.log('Dados enviados com sucesso!', response);
            
          },
          (error) => {
            console.error('Erro ao enviar os dados:', error);
           
          }
        );
    } else {
      console.log('Formulário inválido! Valores:', form.value);
     
    }
  }
}
