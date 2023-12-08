import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onLoginFormSubmit(): void {
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('login', 'true');
          this.router.navigate(['/home']);
        } else {
          this.messageService.add({
            key: 'bc',
            severity: 'warn',
            summary: 'Error!',
            detail: 'Usuário ou senha incorretos.',
          });
        }
      },
      error: () =>
        this.messageService.add({
          key: 'bc',
          severity: 'warn',
          summary: 'Error!',
          detail: 'Erro ao fazer login. Tente novamente mais tarde.',
        }),
    });
  }
}
