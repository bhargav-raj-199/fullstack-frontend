import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  mobiles:any[]=[];
  columns:any=[];
  getData(){
   

    this.mobiles.forEach((element:any)=>{
      
      this.columns=Object.keys(element);
    })
  };
  constructor(private _mobileService:MobileService) { }

  ngOnInit(): void {

    this._mobileService.getAll().subscribe({
      next:(data)=>{this.mobiles=data;
    },
      error:(error)=>console.log(error),
      complete:()=>{console.log('completed')
    this.getData()}
      
    })
    this.getData();
    
  }

}
