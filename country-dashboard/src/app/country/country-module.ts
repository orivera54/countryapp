import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryQueryComponent } from './components/country-query/country-query.component';

import { CountryRoutingModule } from './country-routing-module';


@NgModule({
 // declarations: [CountryQueryComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountryRoutingModule,
    CountryQueryComponent
  ]
})
export class CountryModule { }
