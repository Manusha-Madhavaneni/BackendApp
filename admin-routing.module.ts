import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MovieCategoryComponent } from './components/movie-category/movie-category.component';
import { MovieComponent } from './components/movie/movie.component';
import { UserComponent } from './components/user/user.component';
import { UsermovieComponent } from './components/usermovie/usermovie.component';

const routes: Routes = [
  
  {path:'', component: AdminDashboardComponent, 
  children:[
    {path: 'user', component:UserComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'moviecategory', component: MovieCategoryComponent},
    {path: 'usermovie', component: UsermovieComponent},
    {path: '', redirectTo: 'user', pathMatch: 'full'}
  ]    
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
