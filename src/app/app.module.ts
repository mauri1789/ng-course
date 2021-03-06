import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AdminComponent } from "./view/admin/admin.component";
import { DetailComponent } from "./view/admin/detail/detail.component";
import { MoviesComponent } from "./view/movies/movies.component";
import { UsersComponent } from "./view/users/users.component";
import { LandingComponent } from "./view/landing/landing.component";
import {EditMovieComponent} from "./view/edit-movie/edit-movie.component";

import { MoviesService } from "./services/movies.service";

import { SeparatorPipe } from "./pipes/separator.pipe";

import { BadgeDirective } from "./directives/badge.directive";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    MoviesComponent,
    UsersComponent,
    LandingComponent,
    EditMovieComponent,
    SeparatorPipe,
    BadgeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
