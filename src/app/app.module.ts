import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './share/components/spinner/spinner.component';
import {SpinnerInterceptorService} from "./services/spinner-interceptor.service";
import { NavbarComponent } from './share/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { CardCategoriaComponent } from './share/components/card-categoria/card-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    NavbarComponent,
    HomeComponent,
    CardCategoriaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
