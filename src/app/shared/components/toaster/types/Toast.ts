// import { SafeHtml } from '@angular/platform-browser';

export interface Toast {
  id: string;
  title: string;
  body: string;
  expiry: Date;
  type: ToastType;
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}
