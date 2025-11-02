import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home.component/home.component';
import { LoginComponent } from './components/layout/login.component/login.component';
import { RegisterComponent } from './components/layout/register.component/register.component';
import { DashboardComponent } from './components/layout/dashboard.component/dashboard.component';
import { PrincipalComponent } from './components/layout/principal.component/principal.component';
import { NgModule } from '@angular/core';
import { GuardGuard } from './auth/guard.guard'; 


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'user',  component: PrincipalComponent, canActivate:[GuardGuard], children:[
  { path: 'dashboard', component: DashboardComponent}
   ] },
   { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}