import {ContentManagerComponent} from './content-manager.component';
import {of} from "rxjs";

describe('ContentManagerComponent', () => {

  let contentManagerComponent: ContentManagerComponent;

  function createGenres() {
    return {
      genres: [
        {id: 1, name: 'Action'},
        {id: 2, name: 'Comedy'},
        {id: 3, name: 'Drama'}
      ]
    }
  }

  function createMovieDataService(): any {
    return {
      getGenre: () => {
        return of(createGenres());
      }
    };
  }

  beforeEach(() => {
    const movieDataService = createMovieDataService();
    // @ts-ignore
    contentManagerComponent = new ContentManagerComponent(movieDataService, {});
  });

  it('should get all genres from tmdb', () => {
    //  given
    const genres = createGenres();

    // when
    contentManagerComponent.getAllGenresFromTMDB();

    // then
    expect(contentManagerComponent.allGenres).toEqual(genres.genres);
  });

  it('should filter movies by genre', () => {
    // given
    contentManagerComponent.movies = [
      // @ts-ignore
      {id: 10, genre_ids: [1, 2, 3]}, {id: 20, genre_ids: [2, 6, 3]}, {id: 30, genre_ids: [4, 5, 1]}
    ];

    // when
    contentManagerComponent.getSelectedGenre(1);

    // then
    expect(contentManagerComponent.filteredMovies.length).toBe(2);
    expect(contentManagerComponent.filteredMovies[0].id).toBe(10);
    expect(contentManagerComponent.filteredMovies[1].id).toBe(30);
  });


  // function createFavourite(){
  //   return favourite: [
  //     {id:1, movieName: 'Best Movie Ever', additionalNotes: 'Somenotes1'},
  //     {id:2, movieName: 'Matrix', additionalNotes: 'Somenotes2'},
  //     {id:3, movieName: 'Mr. and Mrs. Smith', additionalNotes: 'Somenotes3'},
  //     {id:4, movieName: 'Police Academy', additionalNotes: 'Somenotes4'},
  //   ]
  // }
  //
  // function createFavouriteService():any{
  //   return{
  //     getFavourite:() =>{
  //       return of(createFavourite());
  //     }
  //   };
  // }
  // it('should get favourite list', () =>{
  //   // given
  //   const favourites = createFavourite();
  //
  //   // when
  //
  //   expect(contentManagerComponent.addFavorite).toEqual(favourites.favourites);
  // });
});
