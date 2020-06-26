import {MovieSearchService} from './movie-search.service';

describe('MovieSearchService', () => {
    let movieSearchService: MovieSearchService;
    let httpClientSpy: { get: jasmine.Spy };
    let searchParameter: string;

    function createMovies() {
      return {
        language: '&language=en-US',
        page: '&page=1',
        includeAdult: '&include_adult=false',
      };
    }

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      movieSearchService = new MovieSearchService(<any>httpClientSpy)
      searchParameter = 'Matrix';
    });

    it('should be created', () => {
      expect(movieSearchService).toBeTruthy();
    });

    it('should return search url params', () => {
      const movies = createMovies();

      movieSearchService.getSearchedMovie(searchParameter);

      expect(movieSearchService.language).toBe(movies.language);
      expect(movieSearchService.page).toBe(movies.page);
      expect(movieSearchService.includeAdult).toBe(movies.includeAdult);
    });
  }
);
