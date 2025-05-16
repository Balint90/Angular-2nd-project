import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) completed!: boolean;
  //private tasksService = inject(TasksService); //Dependency injection (approach 1)

  constructor(private tasksService: TasksService) { } //Dependency injection (approach 2)

  onComplete() {
    this.tasksService.toggleTask(this.task.id);
    console.log(this.task.completed);
  }

  onRemove() {
    this.tasksService.removeTask(this.task.id);
  }
}
