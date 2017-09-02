import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../component/app/app.component';
import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from '../component/login/login.component';

const appRoutes: Routes = [{
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
},
{
    path: "login",
    component: LoginComponent
},
{
    path: "home",
    component: HomeComponent
}

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
