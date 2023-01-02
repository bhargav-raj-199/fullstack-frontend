import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mobile } from 'src/app/models/mobile';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
  id!: string;

 // public subscription: Subscription
  constructor(private _mobileService:MobileService,
    private _activatedRoute:ActivatedRoute
    ) { }
  mobileDetails!:Mobile;
  get(){
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
          next:(data)=>{
              this.id=data["id"];
          }
        })
        this._mobileService.getById(this.id).subscribe({
          next:(data)=>{
            this.mobileDetails=data;
          },
          error:()=>console.log('error in mobile-details component while retreiving mobile by id'),
          complete:()=>{
            console.log('completed')
          }
        });
   // msg => this.mobileDetails = msg
  //   this._mobileService.getMessage().subscribe({
  //     next:(data)=>{
  //       if(data){
  //       this.mobileDetails=data
  //       console.log(this.mobileDetails);
        
  //       }

  //     },
  //     error:(data)=>console.log("error"),
  //     complete:()=>{console.log('completed')
  //     this.get();
  // }});
    
  }

  
}
