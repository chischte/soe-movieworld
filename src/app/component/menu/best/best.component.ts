import {Component, OnInit} from '@angular/core';
import {MovieDataService} from '../../../service/movie-data.service';
import {IMoviePage} from '../../../model/IMoviePage';
import {IMovie} from '../../../model/IMovie';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit {

  bestMovieListOutput: Array<IMovie>;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    return this.movieDataService.getTopRatedPage()
      .subscribe((data: IMoviePage) => {
        this.bestMovieListOutput = data.results;
      });
  }
}
