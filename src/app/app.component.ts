import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { AppService } from './services/app.service';

//Decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string; //this might not be set

  constructor(private appService: AppService) {
    this.selectedUserId = appService.getSelectedUserId;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.appService.saveSelectedUserId(this.selectedUserId);
  }
  title = 'project-2';
}
