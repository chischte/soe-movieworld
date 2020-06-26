import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieDataService} from '../../../service/movie-data.service';
import {IMovie} from '../../../model/IMovie';
import {IMoviePage} from '../../../model/IMoviePage';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularMovieListOutput: Array<IMovie>;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    return this.movieDataService.getPopularPage()
      .subscribe((data: IMoviePage) => {
        this.popularMovieListOutput = data.results;
      });
  }
}
