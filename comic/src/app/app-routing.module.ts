import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {ComicComponent} from "./comic/comic.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailComponent} from "./detail/detail.component";
import {ReadingComponent} from "./reading/reading.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'comic', component:ComicComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'reading/:id/:chapter_id', component: ReadingComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:"**", component:PageNotFoundComponent }
];

console.log("Dang vao routing root")

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
