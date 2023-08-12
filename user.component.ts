import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/user-auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData:any;
  user:any;

  constructor(private userService: UserService){
    this.user = {
      userId: 0,
      userName: '',
      gender: '',
      mobileNumber: '',
      emailId: '',
      password: ''
    }

    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUser().subscribe((data: any) =>{
      this.userData = data;
      console.log(data);
    })
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data:any) => {
      console.log(data);
      this.getAllUsers();
    })
  }
}
