import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { FormsModule } from '@angular/forms';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkSingleComponent } from './artwork-single/artwork-single.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionComponent } from './question/question.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworksComponent,
    ArtworkDetailComponent,
    ArtworkSingleComponent,
    HomepageComponent,
    QuestionComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
