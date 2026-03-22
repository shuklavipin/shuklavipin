import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './userDataTypeInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // thunderclient should be running if you are using your created API's in localhost, command( npx json-server db.json)
  apiURL = "http://localhost:3000/users";
  constructor(private http:HttpClient){
    console.log("service is working");
  }

  userDetails(){
    return this.http.get<users[]>(this.apiURL);
  }

 //below function is for teamplate driven form
  addUser(user:users){
    return this.http.post<users>(this.apiURL,user)
  }

 // below fucntion is reactive-form-control-basics form
  saveUser(user:users){
    return this.http.post<users>(this.apiURL,user)
  }

  deleteUser(id:number){
    console.log(id);
    
    return this.http.delete<number>(`${this.apiURL}/${id}`);
  }


  // for dynamic edit user and getting single user details with id
  userDetail(id:any){
    return this.http.get<users>(`${this.apiURL}/${id}`)
  }

  // editing user details using put api vid 57
  updateUser(id:string,user:users){
    return this.http.put<users>(`${this.apiURL}/${id}`,user)
  }
}
