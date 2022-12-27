import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    
    
    

  ],
  exports:[
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    
  ]
})
export class MaterialModule { }
