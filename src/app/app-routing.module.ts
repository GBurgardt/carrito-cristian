import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/core/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/core/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     children: [
    //         {
    //             path: 'catalogo',
    //             component: CatalogoComponent
    //         }
    //     ]
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }