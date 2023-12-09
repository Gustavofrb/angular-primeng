import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NonServiceService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', credentials).pipe(
      catchError((error) => {
        console.error('Erro ao enviar os dados:', error);
        return throwError(error);
      })
    );
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      this.login(formData).subscribe((response) => {
        console.log('Dados enviados com sucesso!', response);
      });
    } else {
      console.log('Formulário inválido! Valores:', form.value);
    }
  }
}
