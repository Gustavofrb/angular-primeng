import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}`).pipe(
      map((users: User[]) => {
        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );
        const isLoggedIn = !!foundUser;
        this.isLoggedIn = isLoggedIn;
        return isLoggedIn;
      }),
      catchError((error) => {
        console.error('Erro no login:', error);
        return of(false);
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

  isLoggedInUser(): Observable<boolean> {
    return of(this.isLoggedIn);
  }

  isEmailUnique(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}`).pipe(
      map((users: User[]) => {
        return !users.some((user) => user.email === email);
      }),
      catchError(() => {
        return of(true);
      })
    );
  }

  register(user: User): Observable<boolean> {
    return this.isEmailUnique(user.email).pipe(
      switchMap((isUnique: boolean) => {
        if (isUnique) {
          return this.http.post<any>(`${this.apiUrl}`, user).pipe(
            map((response) => {
              return !!response;
            })
          );
        } else {
          return of(false);
        }
      })
    );
  }
}
