import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login.component/login.component';
import { RegisterComponent } from './pages/register.component/register.component';
import { DashboardComponent } from './components/layout/user/dashboard.component/dashboard.component';
import { NgModule } from '@angular/core';
import { roleGuard } from './auth/guards/role.guard';
import { HomeComponent } from './pages/home.component/home.component';
import { PrincipalAdminComponent } from './components/layout/admin/principal-admin.component/principal-admin.component';
import { DashboardAdminComponent } from './components/layout/admin/dashboard-admin.component/dashboard-admin.component';
import { PrincipalComponent } from './components/layout/user/principal.component/principal.component';
import { AvailableResourcesAdminComponent } from './components/layout/admin/available-resources-admin.component/available-resources-admin.component';
import { ResourceDetailsComponent } from './components/layout/user/resource-details.component/resource-details.component';
import { IncidentsComponent } from './components/layout/admin/incidents.component/incidents.component';
import { AvailableResourcesComponent } from './components/layout/user/available-resources.component/available-resources.component';
import { DetailComponent } from './components/layout/admin/detail/detail.component';
import { HistoryComponent } from './components/layout/admin/history.component/history.component';
import { ReservationsComponent } from './components/layout/user/reservations.component/reservations.component';
import { IncidentsDetailsComponent } from './components/layout/admin/incidents-details.component/incidents-details.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'api/auth/login', component: LoginComponent },
  { path: 'api/auth/register', component: RegisterComponent },
  
  { path: 'incidentes/:id', component: IncidentsDetailsComponent }, 

  {
    path: 'user', canActivate: [roleGuard], data: { roleFlag: ['ROLE_USER'] },
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      {
        path: 'principal', component: PrincipalComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'internal-resources', component: AvailableResourcesComponent },
          { path: 'internal-resources/:id', component: ResourceDetailsComponent },
          { path: 'reservations', component: ReservationsComponent }
        ]
      },
    ],
  },

  {
    path: 'admin', canActivate: [roleGuard], data: { roleFlag: ['ROLE_ADMIN'] },
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
      { path: 'principal', component: PrincipalAdminComponent, children:[
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component:DashboardAdminComponent},
        {path: 'internal-resources', component:AvailableResourcesAdminComponent},
        {path: 'internal-resources/:id', component: ResourceDetailsComponent},
        {path: 'incidents', component:IncidentsComponent},
        { path: 'detail', component: DetailComponent }, 
        { path: 'history', component: HistoryComponent },
      ]},
    ],
  },

  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
