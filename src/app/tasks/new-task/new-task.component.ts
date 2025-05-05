import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Add this to handle backdrop click
  onBackdropClick(event: MouseEvent) {
    if ((event.target as Element).className === 'backdrop') {
      this.onCancel();
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.enteredTitle || !this.enteredDate) return;
    
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}