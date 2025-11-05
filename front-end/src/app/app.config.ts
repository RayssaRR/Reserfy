import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'; 
import { NgSelectModule } from '@ng-select/ng-select';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { routes } from './app.routes';
import { meuHttpInterceptor } from './auth/http-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([meuHttpInterceptor])),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatTableModule,           
      MatPaginatorModule,       
      MatSortModule,            
      MatAutocompleteModule,
      MatSelectModule,
      MatIconModule,
      NgxChartsModule,
      NgSelectModule
    )
  ]
};
