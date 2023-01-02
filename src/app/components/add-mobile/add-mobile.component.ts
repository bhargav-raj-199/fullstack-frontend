import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from 'src/app/models/mobile';
import { AuthGuard } from 'src/app/modules/auth/auth.guard';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  id!: string;
  role!:boolean;
  firstName:string='Add';
  lastName:string='Mobile';
  onAddMobile(mobileList:any){
    console.log(mobileList);
    this._mobileService.saveMobile(mobileList.value).subscribe({
      next:(data)=>console.log(data),
      error:(data)=>console.log('error'),
      complete:()=>{alert('mobile added successfully');
    }
    });

  }
  startDate = new Date(2010, 1, 19);
  colors:string[]=['Maroon','Brown','Olive','Teal','Navy','Black','white','Red','Orange','Yellow','Lime','Green'];
  manufacturers:string[]=['Realme','Redmi','Poco','Vivo','Iqoo','Samsung','Apple','Honor','Oppo','Nokia'];
  textures:string[]=['Smooth','Prickly','Sticky','Bristly','Bumpy','Feathery','Slippery','Coarse','Fuzzy'];
  addForm=this._formBuilder.group({
    
    mobileId:[''],
    brand:[''],
    model:[''],
    ram:[0],
    storage:[0],
    os:[''],
    length:[0],
    width:[0],
    weight:[0],
    manufacturer:[''],
    battery:[0],
    color:[''],
    displayTechnology:[''],
    texture:[''],
    price:[0],
    category:[''],
    material:[''],
    rating:[0],
    description:[''],
  })

  // addForm=new FormGroup({
  //   brand: new FormControl(''),
  //   model:new FormControl(''),
  //   ram:new FormControl(''),
  //   storage:new FormControl(''),
  //   os:new FormControl(''),
  //   length:new FormControl(''),
  //   width:new FormControl(''),
  //   weight:new FormControl(''),
  //   manufacturer:new FormControl(''),
  //   battery:new FormControl(''),
  //   color:new FormControl(''),
  //   displayTechnology:new FormControl(''),
  //   texture:new FormControl(''),
  //   price:new FormControl(''),
  //   category:new FormControl(''),

  // })
  
  constructor(private _formBuilder:FormBuilder
    ,private _mobileService:MobileService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _authService:AuthService) { }

  
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=>{
          this.id=data["id"];
      }
    })
    if(this.id){
    this._mobileService.getById(this.id).subscribe({
      next:(data)=>{
         this.addForm.setValue(data);
      },
      error:()=>console.log('error in get By id'),
      complete:()=>console.log('completed')
    });
  }
  if(this._authService.getRoles().includes('MEMBER')||this.id){
    this.role=true;
    this.firstName='Mobile';
    this.lastName='Details';
  }
  else{
    this.role=false;
    
  }

  }
}


