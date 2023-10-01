import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastType } from './types/Toast';
import { v4 as UUID } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  /**
   * The toasts that should currently be shown
   */
  public readonly activeToasts$: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);
  DOMSanitizer: any;

  constructor() {
    setInterval(() => this.removeExpiredToasts(), 1000);
  }

  /**
   * Pops a toast to the toaster stack
   */
  public pop(title: string, body: string, type: ToastType, activeMilliseconds: number = 10000): void {
    this.activeToasts$.next([
      {
        id: UUID(),
        title,
        body,
        type,
        expiry: new Date(new Date().getTime() + activeMilliseconds),
      },
      ...this.activeToasts$.getValue(),
    ]);
  }

  /**
   * Removes a given toast
   */
  public removeToast(id: string): void {
    this.activeToasts$.next(this.activeToasts$.getValue().filter(toast => toast.id !== id));
  }

  /**
   * Removed toasts that have expired
   */
  private removeExpiredToasts(): void {
    const now = new Date();

    this.activeToasts$.next(this.activeToasts$.getValue().filter(toast => toast.expiry > now));
  }
}
