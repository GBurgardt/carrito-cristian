import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/app/pages/core/home/home.component';

import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSpinner, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { MenuComponent } from './pages/core/menu/menu.component';
import { LoginComponent } from './pages/core/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './pages/component/app.component';
import { FrameComponent } from './pages/frame/frame.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    MenuComponent,
    LoginComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatIconModule,
    NgMatSearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
