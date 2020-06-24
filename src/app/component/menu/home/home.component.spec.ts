import { HomeComponent } from './home.component';
import {MovieDataServiceService} from "../../../service/movie-data-service.service";

describe('HomeComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieDataServiceService: MovieDataServiceService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieDataServiceService = new MovieDataServiceService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(movieDataServiceService).toBeTruthy();
  });
});
