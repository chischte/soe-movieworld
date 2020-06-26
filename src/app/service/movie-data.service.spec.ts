import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  let service: MovieDataService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MovieDataService(<any> httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
