import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeModel } from "../../../../shared/models/employee.model";

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent {
  @Input() data: EmployeeModel[];
  @Output() selectedLead = new EventEmitter();

  constructor() { }

  selectLead(): void {
    this.selectedLead.emit();
  }
}
