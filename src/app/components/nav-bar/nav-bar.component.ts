import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  mobiles:any[]=[];
  columns:any=[];
  disable: boolean=false;
  logout(){
    this._authService.logout();
  }
  getData(){
   

    this.mobiles.forEach((element:any)=>{
      
      this.columns=Object.keys(element);
    })
  };
  constructor(private _mobileService:MobileService,
    private _authService:AuthService,
    private _location:Location,
    private _router:Router) { }

  ngOnInit(): void {

    this._router.events.subscribe(()=>{
      this.disable=this._router.url==='/mobiles';
    })

    this._mobileService.getAll().subscribe({
      next:(data)=>{this.mobiles=data;
    },
      error:(error)=>console.log(error),
      complete:()=>{console.log('completed')
    this.getData()}
      
    })
    this.getData();
    
  }
  previous(){
    this._location.back()
  }

}
