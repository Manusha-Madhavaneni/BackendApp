import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user:any;
  count:any;
  constructor(private userserv: UserService, private router: Router){
   this.user = {
    userId:0,
    userName: '',
    password: '',
    emailId: '',
    mobileNumber: '',
    gender: ''
   }

  }
  ngOnInit():void{

  }

    register(user:any){
      return this.userserv.setUser(user).subscribe((data:any) =>
      {
        console.log(data);
        this.router.navigate(['login']);
        alert("Registration Successful");
      },(err:Error) =>{
        console.log(err.message);
      })
    }
  }
