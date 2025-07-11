import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { LogEntry } from '../../../models/log-entry.model';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-log-viewer',
  standalone: true,
  imports: [CommonModule], // DatePipe viene desde CommonModule
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']

})
export class LogViewerComponent implements OnInit {
  logs: LogEntry[] = [];
  loading = false;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.loading = true;
    this.logService.getLogs().subscribe({
      next: (data) => {
        this.logs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener logs', err);
        this.loading = false;
      }
    });
  }

}
