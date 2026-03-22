import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserList } from './component/user-list/user-list';
import { AddUser } from './component/add-user/add-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserList, RouterLink,AddUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tailwind-css');
}
