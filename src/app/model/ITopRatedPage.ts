import {ITopRated} from './ITopRated';

export interface ITopRatedPage {
  page: number;
  total_results: number;
  total_pages: number;
  results: [ITopRated];
}
