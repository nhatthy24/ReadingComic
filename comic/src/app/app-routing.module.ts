import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicComponent} from "./comic/comic.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path:'comic',
    component:ComicComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path:'',
    redirectTo:'comic',
    pathMatch:'full'
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];
console.log("Dang vao routing root")
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
