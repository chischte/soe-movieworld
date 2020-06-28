import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './component/navigation/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app/app.component';
import {FooterComponent} from './component/navigation/footer/footer.component';
import {PopularComponent} from './component/menu/popular/popular.component';
import {HomeComponent} from './component/menu/home/home.component';

import {FavoriteInputComponent} from './component/menu/favorite/favorite-input/favorite-input.component';
import {FavoriteListComponent} from './component/menu/favorite/favorite-list/favorite-list.component';
import {FavoritePageComponent} from './component/menu/favorite/favorite-page/favorite-page.component';
import {MovieDataService} from './service/movie-data.service';

import {SearchBarComponent} from './component/navigation/searchbar/search-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentManagerComponent} from './component/contentManager/content-manager.component';
import {BestComponent} from './component/menu/best/best.component';
import {SearchComponent} from './component/menu/search/search.component';
import {LoginComponent} from './component/auth/login/login.component';
import {SignupComponent} from './component/auth/signup/signup.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthInterceptor} from './service/auth-interceptor';


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
    BestComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
  ],
  providers: [MovieDataService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
