import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [FormsModule],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: TextInputComponent, multi: true }],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';

  /**
   * The type of the input
   */
  @Input() public type: 'text' | 'email' | 'password' = 'text';

  value: string = '';

  // Implement ControlValueAccessor interface
  onChange: any = () => noop;
  onTouched: any = () => noop;

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle disabling if needed
  }

  onInputChange(event: string): void {
    console.log(event);
    this.value = event;
    this.onChange(this.value);
  }
}
