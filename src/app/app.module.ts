import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importe o HTTP_INTERCEPTORS e HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegistryComponentComponent } from './components/registry-component/registry-component.component';
import { AuthInterceptor } from './services/auth-interceptor.service';

const primeNGModules = [
  InputTextModule,
  ButtonModule,
  CheckboxModule,
  ToastModule,
];

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponentComponent,
    FirstComponentComponent,
    HomeComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ...primeNGModules,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
