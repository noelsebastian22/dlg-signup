import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPath } from './types/AppPath';

const routes: Routes = [
  { path: '', redirectTo: AppPath.SignUp, pathMatch: 'full' },
  {
    path: AppPath.SignUp,
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', redirectTo: AppPath.Root },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
