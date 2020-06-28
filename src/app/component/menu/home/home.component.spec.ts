import {HomeComponent} from './home.component';
import {MovieDataService} from "../../../service/movie-data.service";

describe('HomeComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieDataService: MovieDataService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieDataService = new MovieDataService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(movieDataService).toBeTruthy();
  });
});




