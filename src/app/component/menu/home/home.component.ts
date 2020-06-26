import {Component, OnInit} from '@angular/core';
import {MovieDataService} from '../../../service/movie-data.service';
import {IMovie} from '../../../model/IMovie';
import {IMoviePage} from '../../../model/IMoviePage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  homeMovieListOutput: Array<IMovie>;

  constructor(private movieDataService: MovieDataService) {
  }

  ngOnInit() {
    return this.movieDataService.getLatest()
      .subscribe((data: IMoviePage) => {
        this.homeMovieListOutput = data.results;
      });
  }
}
