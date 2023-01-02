import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject, of, Subject } from 'rxjs';
import { Mobile } from '../models/mobile';


@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private _getUrl="http://localhost:9000/mobile-get-api/mobiles";
  private _crudUrl="http://localhost:9000/mobile-crud-api/mobiles";

  private siblingMsg = new BehaviorSubject<Mobile|null>(null);

  constructor(private _httpClient:HttpClient) { }

  getAll=():Observable<Mobile[]>=>{
    return this._httpClient.get<Mobile[]>(this._getUrl);
  }

  saveMobile(mobile:Mobile): Observable<Mobile>
  {
    return this._httpClient.post<Mobile>(this._crudUrl,mobile);
  }

  getById=(id:string):Observable<Mobile>=>{
    return this._httpClient.get<Mobile>(this._getUrl.concat('/'+id));
  }

  deleteMobile=(mobileId:string)=>
  {
    let url=this._crudUrl.concat('/'+mobileId);
    return this._httpClient.delete<Mobile>(url);
  }

  updateMobile(mobile:Mobile): Observable<Mobile>
  {
    return this._httpClient.put<Mobile>(this._crudUrl,mobile);
  }

  public getMessage(): Observable<Mobile|null> {
    return this.siblingMsg;
  }
  /*
   * @param {string} message : siblingMsg
   */
  public updateMessage(mobile: Mobile): void {
    this.siblingMsg.next(mobile);
  }
}
