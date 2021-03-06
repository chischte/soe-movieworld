import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/menu/home/home.component';
import {PopularComponent} from './component/menu/popular/popular.component';
import {BestComponent} from './component/menu/best/best.component';
import {FavoritePageComponent} from './component/menu/favorite/favorite-page/favorite-page.component';
import {SearchComponent} from './component/menu/search/search.component';
import {LoginComponent} from './component/auth/login/login.component';
import {SignupComponent} from './component/auth/signup/signup.component';
import {RecommendedComponent} from './component/menu/recommended/recommended.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'favorite', component: FavoritePageComponent},
  {path: 'best', component: BestComponent},
  {path: 'search/:searchparam', component: SearchComponent}, // searchparam because text is not allowed
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'recommended', component: RecommendedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
