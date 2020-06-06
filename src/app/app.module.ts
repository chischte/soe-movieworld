import {BrowserModule} from '@angular/platform-browser';
import {NgModule,} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './component/navigation/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app/app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './component/navigation/footer/footer.component';
import {PopularComponent} from './component/menu/popular/popular.component';
import {HomeComponent} from './component/menu/home/home.component';
import {FavoriteInputComponent} from './component/menu/favorite/favorite-input/favorite-input.component';
import {FavoriteListComponent} from './component/menu/favorite/favorite-list/favorite-list.component';
import {FavoritePageComponent} from './component/menu/favorite/favorite-page/favorite-page.component';
import {MovieDataServiceService} from './service/movie-data-service.service';

import { SearchBarComponent } from './component/searchbar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentManagerComponent } from './component/contentManager/content-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularComponent,
    HomeComponent,
    FavoriteInputComponent,
    FavoriteListComponent,
    FavoritePageComponent,
    SearchBarComponent,
    ContentManagerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MovieDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
