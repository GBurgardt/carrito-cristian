import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/app/pages/core/home/home.component';

import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { MenuComponent } from './pages/core/menu/menu.component';
import { LoginComponent } from './pages/core/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
