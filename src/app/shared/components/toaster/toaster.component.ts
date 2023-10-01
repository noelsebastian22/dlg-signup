import { Component } from '@angular/core';
import { ToasterService } from './toaster.service';
import { ToastType } from './types/Toast';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent {
  constructor(public toasterService: ToasterService) {}

  getToastClasses(type: ToastType): { [key: string]: boolean } {
    return {
      'Toast--success': type === ToastType.SUCCESS,
      'Toast--error': type === ToastType.ERROR,
      'Toast--info': type === ToastType.INFO,
      'Toast--warning': type === ToastType.WARNING,
    };
  }
}
