import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Decorator (older approach)
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  //Output properties /decorator - older approach/ (gets initial value -> new EventEmitter)
  @Output() select = new EventEmitter<string>(); //<string> is an extra layer of security (not necessary but you can avoid mistakes, type mismatches)

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
