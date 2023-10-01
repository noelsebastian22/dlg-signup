import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { SignupComponent } from './signup.component';
import { ToasterService } from '../../shared/components/toaster/toaster.service';
import { ToastType } from '../../shared/components/toaster/types/Toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let loginService: LoginService;
  let toasterService: ToasterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SharedModule, HttpClientModule],
      declarations: [SignupComponent],
      providers: [LoginService, ToasterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    toasterService = TestBed.inject(ToasterService);
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginService.signup() with correct data when signUp() is called', () => {
    const signupSpy = spyOn(loginService, 'signup').and.returnValue(
      of({
        firstName: 'noel',
        lastName: 'seban',
        email: 'noel@gmail.com',
      })
    );
    spyOn(toasterService, 'pop');
    component.signUpForm.setValue({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });
    component.signUp();
    expect(signupSpy).toHaveBeenCalledWith({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });
    expect(toasterService.pop).toHaveBeenCalledWith('Success', 'Signup Successful', ToastType.SUCCESS);
    expect(component.loading).toBeFalse();
    expect(component.signUpForm.value).toEqual({ firstName: null, lastName: null, email: null });
  });

  it('should not call loginService.signup() when signUpForm is invalid', () => {
    const signupSpy = spyOn(loginService, 'signup');
    spyOn(toasterService, 'pop');
    component.signUpForm.setValue({ firstName: '', lastName: '', email: '' });
    component.signUp();
    expect(signupSpy).not.toHaveBeenCalled();
    expect(toasterService.pop).not.toHaveBeenCalled();
    expect(component.loading).toBeFalse();
  });

  it('should prevent default navigation on form submit', () => {
    const event = new Event('submit');
    spyOn(event, 'preventDefault');
    component.preventNavigation(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should unsubscribe from all subscriptions on component destroy', () => {
    spyOn(component.destroy$, 'next');
    spyOn(component.destroy$, 'complete');
    component.ngOnDestroy();
    expect(component.destroy$.next).toHaveBeenCalled();
    expect(component.destroy$.complete).toHaveBeenCalled();
  });
});
