import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToasterService } from '../shared/components/toaster/toaster.service';
import { ToastType } from '../shared/components/toaster/types/Toast';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status >= 500) {
            this.toasterService.pop('Server Error', 'An unexpected error occurred. Please try again later.', ToastType.ERROR);
          } else {
            this.toasterService.pop('Client Error', error.message, ToastType.ERROR);
          }
        } else {
          this.toasterService.pop('Unknown Error', 'An unexpected error occurred. Please try again later.', ToastType.ERROR);
        }

        // Rethrow the error after handling
        return throwError(() => error);
      })
    );
  }
}
