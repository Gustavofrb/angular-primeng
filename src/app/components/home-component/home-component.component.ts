import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
 
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loading = false; 
      });
  }

  onLogout(): void {
    this.loading = true;
    this.authService.logout();
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
