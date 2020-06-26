import {MovieFavoriteService} from './movie-favorite.service';

describe('MovieFavoriteService', () => {
  let service: MovieFavoriteService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MovieFavoriteService(<any>httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
