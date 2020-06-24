import {SearchComponent} from './search.component';
import {MovieSearchService} from "../../../service/movie-search.service";

describe('SearchComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieSearchService: MovieSearchService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieSearchService = new MovieSearchService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(movieSearchService).toBeTruthy();
  });
});

