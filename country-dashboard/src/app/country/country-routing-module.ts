import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryQueryComponent } from './components/country-query/country-query.component';

const routes = [{ path: '', component: CountryQueryComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
