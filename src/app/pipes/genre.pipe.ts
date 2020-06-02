// import {Pipe, PipeTransform} from "@angular/core";
// import {ITopRated} from "../model/ITopRated";
// import {IGenre} from "../model/IGenre";
//
// // basic pipe filtering for parsed JSON response
// @Pipe({name: 'genreFilter'})
// export class GenrePipe implements PipeTransform {
//   transform(movies: Array<ITopRated>, includedGenres: Array<IGenre>): Array<ITopRated> {
//     const filteredMovies = movies.filter(movie => {
//       let include = false;
//       includedGenres.forEach(selectedGenres => {
//         if(movie.genre_ids.includes(selectedGenres.genres)){
//           include = true;
//         }
//       });
//       return include;
//     });
//
//     return filteredMovies;
//   }
// }
