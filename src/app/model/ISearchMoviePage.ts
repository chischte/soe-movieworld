import {ISearchMovie} from './ISearchMovie';

export interface ISearchMoviePage {
  page: number,
  total_results: number,
  total_pages: number,
  results: [ISearchMovie];
}
