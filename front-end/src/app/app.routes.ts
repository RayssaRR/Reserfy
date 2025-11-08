import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login.component/login.component';
import { RegisterComponent } from './pages/register.component/register.component';
import { DashboardComponent } from './components/layout/user/dashboard.component/dashboard.component';
import { DashboardAdminComponent } from './components/layout/admin/dashboard-admin.component/dashboard-admin.component';
import { NgModule } from '@angular/core';
import { roleGuard } from './auth/guards/role.guard';
import { HomeComponent } from './pages/home.component/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  {
    path: 'user',
    canActivate: [roleGuard],
    data: { roleFlag: ['USER'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  {
    path: 'admin',
    canActivate: [roleGuard],
    data: { roleFlag: ['ADMIN'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardAdminComponent },
    ],
  },

  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
