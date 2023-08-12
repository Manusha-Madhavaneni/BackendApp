import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './components/user/user.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { UsermovieComponent } from './components/usermovie/usermovie.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserComponent,
    MovieComponent,
    MovieCategoryComponent,
    UsermovieComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
