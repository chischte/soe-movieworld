import {Component, OnInit} from '@angular/core';
import {MovieDataServiceService} from '../../../service/movie-data-service.service';
import {IMovie} from '../../../model/IMovie';
import {IMoviePage} from '../../../model/IMoviePage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  homeMovieListOutput: Array<IMovie>;

  constructor(private movieDataServiceService: MovieDataServiceService) { }

  ngOnInit() {
    return this.movieDataServiceService.getLatest()
      .subscribe((data: IMoviePage) => {
        this.homeMovieListOutput = data.results;
      });
  }
}
