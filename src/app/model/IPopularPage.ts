import {IPopular} from './IPopular';

export interface ITopRatedPage {
  page: number,
  total_results: number,
  total_pages: number,
  results: [IPopular]
}
