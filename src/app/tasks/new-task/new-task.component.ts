import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() newTask = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  onNewTask() {

  }

  onCancel() {
    this.cancel.emit();
  }

}
