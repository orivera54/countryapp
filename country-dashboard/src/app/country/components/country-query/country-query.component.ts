import { Component , OnInit} from '@angular/core';
import { CountryService } from '../../services/country.service';
import { LogService } from '../../../logs/services/log.service';
import { Country } from '../../../models/country.model';
import { LogEntry } from '../../../models/log-entry.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-country-query',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-query.component.html',
  styleUrls: ['./country-query.component.css']

})
export class CountryQueryComponent implements OnInit  {
  username = '';
  limit = 5;
  countries: Country[] = [];
  currentPage = 1;
  maxPerPage = 10;
  loading = false;

  constructor(
    private countryService: CountryService,
    private logService: LogService
  ) {}
  ngOnInit(): void {
    this.onSubmit();
  }

  get paginatedCountries(): Country[] {
    const start = (this.currentPage - 1) * this.maxPerPage;
    return this.countries.slice(start, start + this.maxPerPage);
  }

  get totalPages(): number[] {
  return Array(Math.ceil(this.countries.length / this.maxPerPage)).fill(0).map((_, i) => i + 1);
}

  onSubmit(): void {
    if (!this.username.trim()) return;

    this.loading = true;
    this.countryService.fetchCountries(this.limit).subscribe({
      next: (data: Country[]) => {
        this.countries = data;
        this.currentPage = 1;

        const log: LogEntry = {
          username: this.username,
          request_timestamp: new Date(),
          num_countries_returned: data.length,
          countries_details: data
        };

        this.logService.saveLog(log).subscribe();
        this.loading = false;
      },
     error: (err) => {
  console.error('Error al consultar países', err);
  alert(`No se pudo obtener los países.`);
  this.loading = false;
}

    });
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

}
