import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private userserv: UserAuthService, private router: Router){
    
  }

  login(){

    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin123'){
      this.router.navigate(['admin']);
    }else if(this.loginForm.value.username == ''|| this.loginForm.value.password == ''){
      alert("Enter Value");
    }else
    {
      this.userserv.login(this.loginForm.value).subscribe((result) =>
      {
  
        alert("Logged In Successfully");
        this.router.navigate(['user']);
      },(err:Error)=>{
        alert(err.message);
      });
    }
  }
}
