import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToasterService } from './toaster.service';
import { ToastType } from './types/Toast';
import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;
  let toasterService: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToasterComponent],
      providers: [ToasterService],
    });
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    toasterService = TestBed.inject(ToasterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a success toast', () => {
    toasterService.pop('Success', 'Success message', ToastType.SUCCESS);
    fixture.detectChanges();
    const toastElement = fixture.debugElement.query(By.css('.Toast--success'));
    expect(toastElement.nativeElement.textContent).toContain('Success message');
  });

  it('should display an error toast', () => {
    toasterService.pop('Error', 'Error message', ToastType.ERROR);
    fixture.detectChanges();
    const toastElement = fixture.debugElement.query(By.css('.Toast--error'));
    expect(toastElement.nativeElement.textContent).toContain('Error message');
  });

  it('should display an info toast', () => {
    toasterService.pop('Info', 'Info message', ToastType.INFO);
    fixture.detectChanges();
    const toastElement = fixture.debugElement.query(By.css('.Toast--info'));
    expect(toastElement.nativeElement.textContent).toContain('Info message');
  });

  it('should display a warning toast', () => {
    toasterService.pop('warning', 'Warning message', ToastType.WARNING);
    fixture.detectChanges();
    const toastElement = fixture.debugElement.query(By.css('.Toast--warning'));
    expect(toastElement.nativeElement.textContent).toContain('Warning message');
  });
});
