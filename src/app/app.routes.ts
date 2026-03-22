import { Routes } from '@angular/router';
import { UserList } from './component/user-list/user-list';
import { AddUser } from './component/add-user/add-user';
import { EditUser } from './component/edit-user/edit-user';

export const routes: Routes = [
    {path:'userList',component:UserList},
    {path:'addUser',component:AddUser},
    {path:'editUser/:id',component:EditUser}
];
