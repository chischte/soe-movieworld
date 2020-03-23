import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/menu/home/home.component";
import {ActualComponent} from "./component/menu/actual/actual.component";
import {BestComponent} from "./component/menu/best/best.component";
import {PopularComponent} from "./component/menu/popular/popular.component";
import {FavoriteInputComponent} from "./component/menu/favorite/favorite-input/favorite-input.component";


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'actual', component: ActualComponent},
    { path: 'best', component: BestComponent},
    { path: 'popular', component: PopularComponent},
    { path: 'favorite', component: FavoriteInputComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
