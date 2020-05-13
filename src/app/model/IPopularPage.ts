import {IPopular} from './IPopular';

export interface IPopularPage {
  page: number,
  total_results: number,
  total_pages: number,
  results: [IPopular]
}
