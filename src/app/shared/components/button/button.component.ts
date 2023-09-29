import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
