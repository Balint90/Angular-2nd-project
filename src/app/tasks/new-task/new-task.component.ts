import { Component, EventEmitter, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Output() addNewTask = new EventEmitter<NewTaskData>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit() {
    const newTask: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    this.addNewTask.emit(newTask);
  }

  onCancel() {
    this.cancel.emit();
  }
}
