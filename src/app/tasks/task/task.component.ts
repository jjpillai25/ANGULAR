import { Component, Output, EventEmitter, input } from '@angular/core';
import { Task } from './Task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  readonly task = input.required<Task>();
  @Output() complete = new EventEmitter<string>();
form: FormGroup;
constructor (private fb: FormBuilder) {
  this.form = this.fb.group({title: [''], summary: [''], date: [''],});
}
  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}