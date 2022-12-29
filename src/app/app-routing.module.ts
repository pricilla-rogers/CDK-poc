import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

 export const routes: Routes = [
 {path:'',redirectTo:'login', pathMatch:'full'},

  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'details', component:DetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
