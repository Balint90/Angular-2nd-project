import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() username?: string; // question mark (?) tells TS that this variable might not be initialized and that's okay
  //questionmark (?) is basically letting the variable to have undefined value which is equal to string | undefined

}
