import { NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: TextInputComponent, multi: true }],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';

  /**
   * The type of the input
   */
  @Input() public type: 'text' | 'email' | 'password' = 'text';

  value: string = '';

  // Implement ControlValueAccessor interface
  onChange: any = () => noop;
  onTouched: any = () => noop;

  /**
   * The form control for this custom input
   */
  public control: NgControl | null = null;

  constructor(protected injector: Injector) {}

  ngOnInit(): void {
    this.control = this.injector.get<NgControl | null>(NgControl as any, null);
  }

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
    this.value = event;
    this.onChange(this.value);
  }

  /**
   * To check if the control is invalid and dirty or touched
   * @returns true if the control is invalid and dirty or touched
   */
  isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
  }
}
