import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
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

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  
  {path: 'contato', component: ContactComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'historico-clinico', component: HistoryComponent},
  {path: 'insights', component: InsightsComponent},

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
