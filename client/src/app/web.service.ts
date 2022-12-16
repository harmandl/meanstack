import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  public readonly ROOT_URL: string;
  constructor(private http:HttpClient) {
  this.ROOT_URL = "http://localhost:3000";
  }
   
  public get(uri: string) {
    const url: string = `${this.ROOT_URL}/${uri}`
    console.log(url);
    return this.http.get(url);
  }
  public post(uri:string, payload:object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }
  public patch(uri:string, payload:Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  public delete(uri:string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
