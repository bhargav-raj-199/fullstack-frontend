import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from 'src/app/models/mobile';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'acheron-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  id!:string;
  mobile!: Mobile;
  grid:boolean=false;

  delete(mobileId:string){
    this._mobileService.deleteMobile(mobileId).subscribe({
      next:(data)=>console.log(data),
      error:()=>console.log('error'),
      complete:()=>console.log(alert(`mobile with ${mobileId} deleted successfully`))
    });
  }
  // allChecked: boolean = false;

  // updateAllChecked() {
  //   this.allChecked = this.columns1 != null && this.columns1.every(t => t.selected);
  // }

  // someSelected(): boolean {
  //   if (this.columns1 == null) {
  //     return false;
  //   }
  //   return this.columns1.filter(t => t.selected).length > 0 && !this.allChecked;
  // }

  // setAll(selected: boolean) {
  //   this.allChecked = selected;
  //   if (this.columns1 == null) {
  //     return;
  //   }
  //   this.columns1.forEach(t => t.selected = selected);
  // }
  role!:string[];
  columns = new FormControl('');
  columns1:any[]=[];
  mobiles:any[]=[];
  displayColumns:any[]=[];
  onItemSelect(event:any){
    // event.forEach((ele:any)=>{
    //   this.displayColumns=ele;
    // })
    console.log(event.value);
    this.displayColumns=event.value;
  }
 detail(mobile:Mobile){
  // console.log(mobile)
  // this._mobileService.updateMessage(mobile);
  this._router.navigate(['/add-mobile',mobile.mobileId])
 }
  getData(){
    this.mobiles.forEach((element:any)=>{
      this.displayColumns=Object.keys(element);
      this.columns1 =this.displayColumns;
      console.log(this.displayColumns);
      console.log(this.columns.value);
      if(this.role.includes('MANAGER'))
      this.displayColumns.push('edit','delete');
      else if(this.role.includes('EDITOR'))
      this.displayColumns.push('edit');
    })
  }
  constructor  (

    private _mobileService:MobileService,
    private _authService:AuthService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    this.role=this._authService.getRoles();
    console.log(this.role);
  
    this._mobileService.getAll().subscribe({

      next:(data)=>this.mobiles=data,
      error:(data)=>console.log("error"),
      complete:()=>{console.log("completed")
        this.getData();
      }
    })
  }
  onClickEdit(id:string){
    console.log('hi this is edit');
    this._router.navigate(['/add-mobile',id])
  }
  view(){
    if(this.grid==false){
    this.grid=true;
    }
    else{
      this.grid=false;
    }
  }
  

}
