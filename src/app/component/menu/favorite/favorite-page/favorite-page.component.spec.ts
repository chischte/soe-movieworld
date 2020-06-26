import {FavoritePageComponent} from './favorite-page.component';
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";

describe('FavoritePageComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieFavoriteService: MovieFavoriteService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieFavoriteService = new MovieFavoriteService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(movieFavoriteService).toBeTruthy();
  });
});
