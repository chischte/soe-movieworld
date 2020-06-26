// import {BestComponent} from './best.component';
// import {of} from "rxjs";
//
// describe('BestComponent', () => {
//   let bestComponent = BestComponent;
//
//   function createMovies() {
//     return {
//       movies: [
//         {id: 1, title: 'Matrix'},
//         {id: 2, title: 'Police Academy'},
//         {id: 3, title: 'Mr. and Mrs. Smith'}
//       ]
//     }
//   }
//
//   function createMovieDataService(): any {
//     return {
//       getTopRatedPage: () => {
//         return of(createMovies());
//       }
//     };
//   }
//
//   beforeEach(() => {
//     const movieDataService = createMovieDataService();
//     // @ts-ignore
//     bestComponent = new BestComponent({});
//   });
//
//   it('should get top rated page', () => {
//     // given
//     console.log('bestComponent', bestComponent);
//
//     // @ts-ignore
//     bestComponent.movies = [
//       // @ts-ignore
//       {id: 10, title: 'Matrix'}, {id: 20, title: 'Police Academy'}, {id: 30, title: 'Mr. and Mrs. Smith'}
//     ];
//
//     // when
//     bestComponent.getTopRated();
//
//     // then
//     // @ts-ignore
//     expect(bestComponent.movies[0].id).toBe(10);
//   });
// });
