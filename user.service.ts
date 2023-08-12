import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  getUser(){
    return this.httpclient.get("http://localhost:8080/user/registerUser");
  }
  
  setUser(user : any){
    return this.httpclient.post("http://localhost:8080/user/registerUser",user);
  }

  deleteUser(id:any){
    return this.httpclient.delete("http://localhost:8080/user/list/"+id);
  }
}
