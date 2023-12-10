import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

  isLoggedInUser(): Observable<boolean> {
    return of(this.isLoggedIn);
  }
  register(user: User): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}`, user).pipe(
      map((response) => {
        return !!response;
      })
    );
  }
}
