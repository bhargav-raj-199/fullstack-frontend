import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path:'',redirectTo: '/admin',pathMatch:'full'},
  {path:'admin',component:AppComponent,canActivate:[AuthGuard],data:{roles: ["MANAGER","EDITOR"]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
