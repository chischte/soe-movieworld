import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchInputField: string;

  constructor(private route: Router) {}

  ngOnInit() {
  }

  getTheSearchedMovie() {
    this.redirectTo('/search/' + this.searchInputField );
  }

  redirectTo(uri: string){
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.route.navigate([uri]));
  }
}
