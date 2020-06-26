import {AuthService} from "./auth.service";

describe('AuthService', () => {
  let authService: AuthService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    authService = new AuthService(<any>httpClientSpy)
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
