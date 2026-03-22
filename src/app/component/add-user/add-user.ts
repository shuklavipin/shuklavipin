import { Component, signal, Signal } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { users } from '../../services/userDataTypeInterface';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  //below logic is for teamplate driven form
  addUser(data: users) {
    this.userService.addUser(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/userList']);
      }
    });
  }

  // below logic is reactive-form-control-basics form
  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  addUser1(){
    let name = this.name.value;
    let age = this.age.value;
    let email = this.email.value;
    console.log(this.name.value);
    if (name && age && email) {
      let data:users = {
      name:name,
      age:Number(age),
      email:email
    }
    this.userService.saveUser(data).subscribe((res)=>{
      if (res) {
        this.router.navigate(['/userList']);
      }
    })
  }
  }
}
