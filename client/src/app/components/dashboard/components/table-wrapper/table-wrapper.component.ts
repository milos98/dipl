import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeModel } from "../../../../shared/models/employee.model";
import { EmployeesService } from "../../../../shared/employees/employees.service";

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent {
  @Input() data: EmployeeModel[];
  @Output() selectedLead = new EventEmitter();
  @Output() selectedEmployee = new EventEmitter();

  constructor(private employeesService: EmployeesService) { }

  selectLead(): void {
    this.selectedLead.emit();
  }

  selectEmployee(employee: EmployeeModel): void {
    this.employeesService.setSelectedEmployee(employee);
    this.selectedEmployee.emit();
  }
}
