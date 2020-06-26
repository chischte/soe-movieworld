import {FavoriteListComponent} from './favorite-list.component';
import {of} from "rxjs";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MovieFavoriteService} from "../../../../service/movie-favorite.service";
import {IFavorite} from "../../../../model/IFavorite";

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let mockFavouriteService;
  let favoriteList;
  let service: MovieFavoriteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavoriteListComponent]
    });

    service = TestBed.get(MovieFavoriteService);
    httpMock = TestBed.get(HttpTestingController);
    favoriteList = [
      {id: 1, movieName: 'SpiderDude'},
      {id: 2, movieName: 'Wonderful Woman'},
      {id: 3, movieName: 'SuperDude'}
    ];

    mockFavouriteService = jasmine.createSpyObj(['getFavourite', 'addFavourite', 'deleteFavourite']);
    component = new FavoriteListComponent(mockFavouriteService);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call someThing', () => {
    const dummyPost: IFavorite[] = [{
      _id: '1',
      movieName: 'some Notes'
    }, {
      _id: '2',
      movieName: 'some Notes2'
    }];

    service.getFavorite().subscribe(posts => {
      expect(posts.length).toEqual(2);
      expect(posts).toEqual(dummyPost);
    });

    const request = httpMock.expectOne(`${service.baseUrl}/favourite/favorite`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyPost);

  });
});
