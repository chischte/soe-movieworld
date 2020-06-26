import {BestComponent} from './best.component';
import {MovieDataService} from "../../../service/movie-data.service";

describe('BestComponent', () => {
  let movieDataService: MovieDataService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieDataService = new MovieDataService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(movieDataService).toBeTruthy();
  });
});
