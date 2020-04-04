import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/menu/home/home.component';
import {ActualComponent} from './component/menu/actual/actual.component';
import {BestComponent} from './component/menu/best/best.component';
import {PopularComponent} from './component/menu/popular/popular.component';
import {FavoritePageComponent} from './component/menu/favorite/favorite-page/favorite-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'actual', component: ActualComponent },
  { path: 'best', component: BestComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'favorite', component: FavoritePageComponent },
  // { path: '**', component: PageNotFoundComponent } <--- ToDo
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing : true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
