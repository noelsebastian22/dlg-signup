import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TextInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly set the input value', () => {
    const testValue = 'testValue';
    component.writeValue(testValue);
    expect(component.value).toEqual(testValue);
  });

  it('should call onChange when value changes', () => {
    const spy = spyOn(component, 'onChange');
    const testValue = 'testValue';
    component.onInputChange(testValue);
    expect(component.value).toEqual(testValue);
    expect(spy).toHaveBeenCalledWith(testValue);
  });

  // it('should call onTouched when input is touched', () => {
  //   const spy = spyOn(component, 'onTouched');
  //   component.onInputChange('testValue');
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should correctly set the placeholder', () => {
    const testPlaceholder = 'Test Placeholder';
    component.placeholder = testPlaceholder;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.placeholder).toEqual(testPlaceholder);
  });

  it('should correctly set the input type', () => {
    const testType = 'password';
    component.type = testType as any;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.type).toEqual(testType);
  });
});
