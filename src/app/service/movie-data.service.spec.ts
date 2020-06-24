import { MovieDataServiceService } from './movie-data-service.service';

describe('MovieDataServiceService', () => {
  let service: MovieDataServiceService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MovieDataServiceService(<any> httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
