import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieDataServiceService} from '../../../service/movie-data-service.service';
import {IMovie} from '../../../model/IMovie';
import {IMoviePage} from '../../../model/IMoviePage';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularMovieListOutput: Array<IMovie>;

  constructor(private movieDataServiceService: MovieDataServiceService) { }

  ngOnInit() {
    return this.movieDataServiceService.getPopularPage()
      .subscribe((data: IMoviePage) => {
        this.popularMovieListOutput = data.results;
      });
  }
}
