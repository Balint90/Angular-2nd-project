import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { AppService } from './services/app.service';

//Decorator
@Component({
  selector: 'app-root',
  standalone: false,
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
