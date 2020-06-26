import {SearchComponent} from './search.component';
import {MovieSearchService} from "../../../service/movie-search.service";
import {ActivatedRoute} from "@angular/router";

describe('SearchComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieSearchService: MovieSearchService;

  let searchComponent: SearchComponent;

  function createSearchInputString(): any {
    return {
      getSearchedMovie: () => {
        return 'Matrix';
      }
    };
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieSearchService = new MovieSearchService(<any>httpClientSpy);

    const activatedRoute = new ActivatedRoute();
    // @ts-ignore
    searchComponent = new SearchComponent(activatedRoute, {});
  });

  it('should get a list of movies with the name Matrix in it', () => {
    // given
    const urlParam = createSearchInputString();

    // when
    searchComponent.search('Matrix');

    // then
    expect(searchComponent.UrlParameter).toEqual(urlParam);
  });

  it('should be created', () => {
    expect(movieSearchService).toBeTruthy();
  });
});

