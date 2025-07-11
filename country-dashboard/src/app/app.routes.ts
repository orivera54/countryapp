import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [

    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./country/country-module').then(m => m.CountryModule)
      },
      {
        path: 'logs',
        loadChildren: () => import('./logs/logs-module').then(m => m.LogsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '' // Redirección en caso de ruta no encontrada
  }


];
