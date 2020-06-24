import { ContentManagerComponent } from './content-manager.component';
import {MovieDataServiceService} from "../../service/movie-data-service.service";

describe('ContentManagerComponent', () => {
  let movieDataServiceService: MovieDataServiceService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieDataServiceService = new MovieDataServiceService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(movieDataServiceService).toBeTruthy();
  });
});
