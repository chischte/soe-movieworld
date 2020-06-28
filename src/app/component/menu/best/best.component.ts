import {Component, OnChanges, OnInit} from '@angular/core';
import {MovieDataService} from '../../../service/movie-data.service';
import {IMoviePage} from '../../../model/IMoviePage';
import {IMovie} from '../../../model/IMovie';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})

export class BestComponent implements OnInit{
  movies: Array<IMovie>;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    this.getTopRated();
  }

  getTopRated(){
    return this.movieDataService.getTopRatedPage()
      .subscribe((data: IMoviePage) => {
        this.movies = data.results;
      });
  }
}
