import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { LoadingSwirlyComponent } from './components/loading-swirly/loading-swirly.component';

@NgModule({
  declarations: [ToasterComponent],
  imports: [CommonModule, FormsModule, TextInputComponent, ButtonComponent, LoadingSwirlyComponent],
  exports: [TextInputComponent, ButtonComponent, ToasterComponent, LoadingSwirlyComponent],
})
export class SharedModule {}
