import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegistryComponentComponent } from './components/registry-component/registry-component.component';
import { AuthGuard } from './services/auth-guard.service';
import { CoursesComponent } from './components/courses/courses.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: FirstComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro',
    component: RegistryComponentComponent,
  },
  {
    path: 'cursos',
    component: CoursesComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
