import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogViewerComponent } from './components/log-viewer/log-viewer.component';

import { LogsRoutingModule } from './logs-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogsRoutingModule,
    LogViewerComponent
  ]
})
export class LogsModule { }
