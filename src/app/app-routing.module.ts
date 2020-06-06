import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/menu/home/home.component';
import {PopularComponent} from './component/menu/popular/popular.component';
import {FavoritePageComponent} from './component/menu/favorite/favorite-page/favorite-page.component';
import {ContentManagerComponent} from "./component/contentManager/content-manager.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'contentmanager', component: ContentManagerComponent },
  // { path: '**', component: PageNotFoundComponent } <--- ToDo
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing : false })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
