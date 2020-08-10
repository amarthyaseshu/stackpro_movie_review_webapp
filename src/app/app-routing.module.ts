import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomecomponentComponent,
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
