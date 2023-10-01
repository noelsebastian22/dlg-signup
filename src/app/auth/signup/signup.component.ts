import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { ToasterService } from 'src/app/shared/components/toaster/toaster.service';
import { ToastType } from 'src/app/shared/components/toaster/types/Toast';
import { LoginUser } from 'src/app/shared/types/login-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  /**
   * Signup form group
   */
  public readonly signUpForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  /**
   * Destroy the subscription on component destroy
   */
  public destroy$ = new Subject<void>();

  public loading = false;

  constructor(private loginService: LoginService, private fb: FormBuilder, private toasterService: ToasterService) {}

  signIn(): void {
    alert('Sign In to be implemented');
  }

  /**
   * Prevent the default behaviour of the element
   * @param $event
   */
  preventNavigation($event: Event): void {
    $event.preventDefault();
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      this.loading = true;
      const loginUser: LoginUser = {
        firstName: this.signUpForm.value.firstName as string,
        lastName: this.signUpForm.value.lastName as string,
        email: this.signUpForm.value.email as string,
      };
      this.loginService
        .signup(loginUser)
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => (this.loading = false))
        )
        .subscribe(() => {
          this.toasterService.pop('Success', 'Signup Successful', ToastType.SUCCESS);
          this.loading = false;
          this.signUpForm.reset();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
}
