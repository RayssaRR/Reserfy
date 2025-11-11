import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { RegisterComponent } from './components/layout/register.component/register.component';
import { DashboardComponent } from './components/layout/dashboard.component/dashboard.component';
import { PrincipalComponent } from './components/layout/principal.component/principal.component';
import { NgModule } from '@angular/core';
import { GuardGuard } from './auth/guard.guard';
import { ContactComponent } from './pages/contact/contact.component'; 
import { ProductsComponent } from './pages/products/products.component';
import { HistoryComponent } from './pages/history/history.component';
import { InsightsComponent } from './pages/insights/insights.component'; 
import { SpeechPageComponent } from './pages/speech-page/speech-page.component';
import { InventoryPageComponent } from './pages/inventory/inventory-page.component';
import { CameraToolsComponent } from './pages/camera-tools/camera-tools.component';

import { HomePageComponent } from './pages/home/home-page.component'; 

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  {path: 'home', component: HomePageComponent},
  
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  
  {path: 'contato', component: ContactComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'historico-clinico', component: HistoryComponent},
  {path: 'insights', component: InsightsComponent},

  {
      path: 'inventario',
      component: InventoryPageComponent
  },
  
  {
      path: 'ferramentas-camera',
      component: CameraToolsComponent
  },

  {
      path: 'leitura-voz', 
      component: SpeechPageComponent
  },

  {path: 'user', component: PrincipalComponent, canActivate:[GuardGuard], children:[
    { path: 'dashboard', component: DashboardComponent }
  ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
