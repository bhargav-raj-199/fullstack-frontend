import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddMobileComponent } from './components/add-mobile/add-mobile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
   {path:'',pathMatch:'full',redirectTo:'mobiles'},
  {path:'admin',component:AppComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR"]}},
  {path: 'add',component:AddMobileComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR"]}},
  {path: 'mobiles',component:MobileListComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR","MEMBER"]}},
  {path: 'mobile-details/:id',component:MobileDetailsComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR","MEMBER"]}},
  {path: 'add-mobile/:id',component:AddMobileComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR","MEMBER"]}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
