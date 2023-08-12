import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loggedUser:any;
  userdata:any;
  username: any;
  password: any;

  constructor(private router: Router, private user: UserService) {
    this.getAllUsers();
  }

  setToken(token: string, userInfo: string): void {
    localStorage.setItem('usertoken', token);
    localStorage.setItem('userLogged',userInfo);    
  }

  getToken(): string | null {
    return localStorage.getItem('usertoken');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('usertoken');
    localStorage.removeItem('userLogged');
    this.router.navigate(['']);
  }

  getAllUsers(){
    this.user.getUser().subscribe((data: any) =>
    {
      this.userdata = data;
      console.log(data);
    })
   }
  
   verify():boolean{
    for(let s of this.userdata){
     
      
      
      if(this.username == s.userName && this.password == s.password){
        console.log("this is pass "+s.password);
        //this.router.navigate(['user']);

        this.loggedUser = s;
        return true ;
      }
    }
    return false;
    
   }

  login({ username, password }: any): Observable<any> {
    this.username = username;
    this.password = password;
    if (this.verify()) {
      
      let user_serialized = JSON.stringify(this.loggedUser);
      this.setToken('abcdefghijklmnopqrstuvwxyza',user_serialized);
      return of(this.loggedUser);
    }
    return throwError(new Error('Failed to login'));
}
}
