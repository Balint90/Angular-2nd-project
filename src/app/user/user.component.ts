import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Decorator (older approach)
  @Input({ required: true }) id!: string; // exclamation mark (!) is telling TS that the developer makes sure that this variable is not getting an undefined value
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  //Output properties /decorator - older approach/ (gets initial value -> new EventEmitter)
  @Output() select = new EventEmitter<string>(); //<string> is an extra layer of security (not necessary but you can avoid mistakes, type mismatches)

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
