import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home.component/home.component';
import { LoginComponent } from './components/layout/login.component/login.component';
import { PrincipalComponent } from './components/layout/principal.component/principal.component';
import { RegisterComponent } from './components/layout/register.component/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{path: "/admin", component: PrincipalComponent, children:[]}
];
