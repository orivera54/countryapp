import { Country } from './country.model';

export interface LogEntry {
  id?: number;
  username: string;
  request_timestamp: Date;
  num_countries_returned: number;
  countries_details: Country[];
}
