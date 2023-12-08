import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = !!localStorage.getItem('login'); // Verifica se o usuário está logado

    const currentUrl = state.url;
    const isLoginPage = currentUrl === '/login';

    if (isLoggedIn) {
      // Se o usuário está logado e tenta acessar a página de login, redireciona para a página inicial
      if (isLoginPage) {
        this.router.navigate(['/home']);
        return false;
      }

      return true; // Permite acesso a outras rotas se o usuário estiver logado
    } else {
      // Se o usuário não está logado, permite acesso à página de login e redireciona para lá em outras rotas
      if (isLoginPage) {
        return true;
      }

      this.router.navigate(['/login']); // Redireciona para a página de login se o usuário não estiver logado
      return false;
    }
  }
}
