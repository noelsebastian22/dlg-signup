import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../shared/components/text-input/text-input.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, TextInputComponent, ButtonComponent],
  declarations: [SignupComponent],
  exports: [SignupComponent],
})
export class AuthModule {}
