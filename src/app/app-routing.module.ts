import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ArtworkSingleComponent } from './artwork-single/artwork-single.component';
import {ResultsComponent} from './results/results.component';
import {DisplayComponent} from './display/display.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'artwork/:id', component: ArtworkSingleComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'display', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
