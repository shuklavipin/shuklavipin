import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { users } from '../../services/userDataTypeInterface';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser {
  name=  new FormControl('');
  email = new FormControl('');
  age = new FormControl('');
  constructor(
    private userService: UserService,
    private activeRouter: ActivatedRoute,
    private router:Router
  ) {}
  ngOnInit() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.userDetail(id).subscribe((data) => {
      console.log(data);
      this.name.setValue(data.name);
      this.age.setValue(data.age.toString());
      this.email.setValue(data.email);
    });
  }
  //vid 57 updating the user using PUT API
   editUser() {
   let name = this.name.value;
   let age = this.age.value;
   let email = this.email.value;
   let id = this.activeRouter.snapshot.paramMap.get('id');
   if (name && age && email && id) {
    let data = {
    name:name,
    email:email,
    age:Number(age)
   }
     this.userService.updateUser(id,data).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['userList']);
    })
   }
  
   }
}
