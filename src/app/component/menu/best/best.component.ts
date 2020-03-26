import { Component, OnInit } from '@angular/core';
import {ITopRated} from "../../../model/ITopRated";
import {MovieDataServiceService} from "../../../service/movie-data-service.service";
import {ITopRatedPage} from "../../../model/ITopRatedPage";

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {
  topRated$ : ITopRated[] = [];
  topRatedImageBasePath : string = 'http://image.tmdb.org/t/p/w200/';

  constructor(private movieDataServiceService: MovieDataServiceService) { }

  ngOnInit() {
    return this.movieDataServiceService.getTopRatedPage()
      .subscribe((data:ITopRatedPage) =>
      {
        this.topRated$ = data.results;
      });
  }
}
