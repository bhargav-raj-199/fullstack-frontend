import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  mobiles:any[]=[];
  displayColumns:any[]=[];
  getData(){
    this.mobiles.forEach((element:any)=>{
      this.displayColumns=Object.keys(element);
      console.log(this.displayColumns);
    })
  }
  constructor(private _mobileService:MobileService) { }

  ngOnInit(): void {
    this._mobileService.getAll().subscribe({
      next:(data)=>this.mobiles=data,
      error:(data)=>console.log("error"),
      complete:()=>{console.log("completed")
        this.getData();
      }
    })
  }

}
