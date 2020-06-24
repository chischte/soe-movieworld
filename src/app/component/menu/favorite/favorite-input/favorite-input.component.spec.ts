import { FavoriteInputComponent } from './favorite-input.component';
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";

describe('FavoriteInputComponent', () => {
  let movieFavoriteService: MovieFavoriteService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieFavoriteService = new MovieFavoriteService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(movieFavoriteService).toBeTruthy();
  });
});
