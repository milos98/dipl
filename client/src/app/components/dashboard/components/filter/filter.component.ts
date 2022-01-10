import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { FilterModel } from "../../../../shared/models/filter.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filter = new EventEmitter<FilterModel>();

  filterForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    followUpDate: [''],
    pipeline: [''],
    phone: [''],
    email: ['']
  });

  constructor(private fb: FormBuilder) { }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key.length === 1 || event.key == 'Backspace' || event.key == 'Delete') {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.filter.emit(this.filterForm.value);
  }

}
