import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListComponent } from './favorite-list.component';
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";

describe('FavoriteListComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieFavoriteService: MovieFavoriteService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieFavoriteService = new MovieFavoriteService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(movieFavoriteService).toBeTruthy();
  });
});
