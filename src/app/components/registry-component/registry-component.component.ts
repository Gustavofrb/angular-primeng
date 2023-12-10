import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { MessageService } from 'primeng/api';
import { User } from './../../interfaces/user.interface';

interface CidadesPorEstado {
  [key: string]: string[];
}

@Component({
  selector: 'app-registry-component',
  templateUrl: './registry-component.component.html',
  styleUrls: ['./registry-component.component.scss'],
})
export class RegistryComponentComponent {
  authService: AuthService;

  estadosBrasileiros: string[] = ['São Paulo', 'Rio de Janeiro'];
  cidadesPorEstado: CidadesPorEstado = {
    'São Paulo': ['São Paulo', 'Campinas', 'Guarulhos', 'Santo André'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias'],
  };
  cidadesDoEstadoSelecionado: string[] = [];

  constructor(
    private authServiceInstance: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.authService = authServiceInstance;
  }

  onStateChange(event: Event): void {
    const selectedState = (event.target as HTMLSelectElement).value;
    if (selectedState) {
      this.cidadesDoEstadoSelecionado = this.cidadesPorEstado[selectedState];
    } else {
      this.cidadesDoEstadoSelecionado = [];
    }
  }

  onSubmit(form: NgForm): void {
   
  }

  onRegistry(form: NgForm): void {
    if (form.invalid) {
    
      this.messageService.add({
        key: 'bc',
        severity: 'warn',
        summary: 'Erro!',
        detail: 'Por favor, preencha todos os campos corretamente.',
      });
      return; 
    }
  
    const { email, password, fullName, dateOfBirth, maritalStatus } = form.value;
  
    const user: User = {
      id: 0,
      email,
      password,
      fullname: fullName,
      dateOfBirth,
      maritalStatus,
   
    };
  
    this.authService.register(user).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/login']);
          this.messageService.add({
            key: 'bc',
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Usuário registrado com sucesso. Faça o login para continuar.',
          });
        } else {
          this.messageService.add({
            key: 'bc',
            severity: 'warn',
            summary: 'Erro!',
            detail: 'Erro ao registrar usuário. Tente novamente mais tarde.',
          });
        }
      },
    });
  }
}  
