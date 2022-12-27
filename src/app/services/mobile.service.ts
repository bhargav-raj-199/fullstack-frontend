import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mobile } from '../models/mobile';


@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private _baseUrl="http://localhost:8081/mobile-api/mobiles";

  constructor(private _httpClient:HttpClient) { }

  getAll=():Observable<Mobile[]>=>{
    return this._httpClient.get<Mobile[]>(this._baseUrl);
  }

  saveMobile(mobile:Mobile): Observable<Mobile>
  {
    return this._httpClient.post<Mobile>(this._baseUrl,Mobile);
  }

 

  deleteMobile=(mobileId:number)=>
  {
    let url=this._baseUrl+mobileId;
    return this._httpClient.delete<Mobile>(url);
  }

  updateMobile(mobile:Mobile): Observable<Mobile>
  {
    return this._httpClient.put<Mobile>(this._baseUrl,Mobile);
  }
}
