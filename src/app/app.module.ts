import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMobileComponent } from './components/add-mobile/add-mobile.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
//import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddMobileComponent,
    MobileListComponent,
    MobileDetailsComponent,
    NavBarComponent,
    PaginationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
