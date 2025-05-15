import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task/services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() addNewTask = new EventEmitter<NewTaskData>();
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onSubmit() {
    const newTask: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
