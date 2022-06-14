import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { FilterModel } from "../../../../shared/models/filter.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filter = new EventEmitter<FilterModel>();

  filterForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    pipeline: new FormControl(''),
    followUpDate: new FormControl('')
  });

  constructor() { }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key.length === 1 || event.key == 'Backspace' || event.key == 'Delete') {
      this.onSubmit();
    }
  }

  removeEmptyFields() {
    let newFormValue: any = {};

      const formGroup = this.filterForm.value;

      Object.keys(formGroup).forEach(key => {
        if (formGroup[key] != '') {

          if (newFormValue === undefined) {
            newFormValue = {};
          }

          const newGroup = newFormValue;
          newGroup[key] = formGroup[key];
        }
      });

    return newFormValue;
  }

  onSubmit() {
    const filters = this.removeEmptyFields();
    this.filter.emit(filters);
  }

}
