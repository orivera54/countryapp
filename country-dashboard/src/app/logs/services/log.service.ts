import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogEntry } from '../../models/log-entry.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private http: HttpClient) {}

  saveLog(log: LogEntry): Observable<any> {
    return this.http.post('/api/logs', log);
  }

  getLogs(): Observable<LogEntry[]> {
    return this.http.get<LogEntry[]>('/api/logs');
  }

}
