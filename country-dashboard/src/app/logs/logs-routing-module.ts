import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogViewerComponent } from './components/log-viewer/log-viewer.component';
const routes = [{ path: '', component: LogViewerComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
