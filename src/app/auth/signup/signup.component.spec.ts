import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { TextInputComponent } from 'src/app/shared/components/text-input/text-input.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [TextInputComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
