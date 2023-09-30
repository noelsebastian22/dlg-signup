import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{ path: '', component: SignupComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
