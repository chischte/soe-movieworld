import {Component, OnInit} from '@angular/core';
import {MovieDataServiceService} from '../../../service/movie-data-service.service';
import {IMoviePage} from '../../../model/IMoviePage';
import {IMovie} from '../../../model/IMovie';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit {

  bestMovieListOutput: Array<IMovie>;

  constructor(private movieDataServiceService: MovieDataServiceService) { }

  ngOnInit() {
    return this.movieDataServiceService.getTopRatedPage()
      .subscribe((data: IMoviePage) => {
        this.bestMovieListOutput = data.results;
      });
  }
}
