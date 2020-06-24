import {MovieSearchService} from './movie-search.service';

describe('MovieSearchService', () => {
  let movieSearchService: MovieSearchService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieSearchService = new MovieSearchService(<any>httpClientSpy)
  });

  it('should be created', () => {
    expect(movieSearchService).toBeTruthy();
  });
});
