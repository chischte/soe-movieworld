import {IMovie} from './IMovie';

export interface IMoviePage {
  page: number,
  total_results: number,
  total_pages: number,
  results: [IMovie];
}
