import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  value = '';
  constructor() {}

  signIn(): void {
    alert('Sign In to be implemented');
  }

  preventNavigation($event: Event): void {
    $event.preventDefault();
  }
}
