import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPath } from './types/AppPath';

const routes: Routes = [{ path: '**', redirectTo: AppPath.Root }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
