import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfig {
  /**
   * The root endpoints for each API
   */
  apiRoots = {
    signup: '/api/signup',
  };
}
