import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { AppConfig } from '../app-config/app-config';
import { LoginUser } from 'src/app/shared/types/login-user';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  let appConfig: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService, AppConfig],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
    appConfig = TestBed.inject(AppConfig);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the signup API', () => {
    const user: LoginUser = { firstName: 'testuser', lastName: 'testpassword', email: 'test@test.com' };
    const expectedResponse: LoginUser = { firstName: 'testuser', lastName: 'testpassword', email: 'test@test.com' };

    service.signup(user).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${appConfig.apiRoots.signup}`);
    expect(req.request.method).toBe('POST');
    req.flush(expectedResponse);
  });
});
