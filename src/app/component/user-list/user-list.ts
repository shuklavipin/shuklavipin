import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/userDataTypeInterface';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [TitleCasePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
userData = signal<users[] | undefined>(undefined);
constructor(public userService:UserService, private router:Router){}

ngOnInit(){
 this.getUsers();
}
getUsers(){
   this.userService.userDetails().subscribe((data)=>{
    console.log(data);
    this.userData.set(data);
  })
}
deleteUser(id:number | undefined){
  console.log(id);
  if (id) {
     this.userService.deleteUser(id).subscribe((res)=>{
    if (res) {
      this.getUsers();
    }
  })
  }
}

//edit user vid 56
editUser(id:number | undefined){
console.log(id);
this.router.navigate([`editUser/${id}`]);
}
}
