import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

//Decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onSelectUser(id: string) {
    console.log("Selected user id is: " + id);
  }
  title = 'project-2';

  users = DUMMY_USERS;

}
