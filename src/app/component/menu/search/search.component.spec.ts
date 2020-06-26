import {SearchComponent} from './search.component';
import {MovieSearchService} from "../../../service/movie-search.service";
import {ActivatedRoute} from "@angular/router";

describe('SearchComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieSearchService: MovieSearchService;
  let searchComponent: SearchComponent;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieSearchService = new MovieSearchService(<any>httpClientSpy);

    const activatedRoute = new ActivatedRoute();
    // @ts-ignore
    searchComponent = new SearchComponent(activatedRoute, {});
  });

  it('should be created', () => {
    expect(movieSearchService).toBeTruthy();
  });
});
