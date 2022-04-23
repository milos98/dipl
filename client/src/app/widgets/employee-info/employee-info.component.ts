import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeesService } from "../../shared/employees/employees.service";
import { EmployeeModel } from "../../shared/models/employee.model";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  employeeData: EmployeeModel;

  public employeeForm: FormGroup;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeData = this.employeesService.getSelectedEmployee();
    this.employeeForm = new FormGroup({
      _id: new FormControl(this.employeeData._id),
      firstName: new FormControl(this.employeeData.firstName, [Validators.required]),
      lastName: new FormControl(this.employeeData.lastName, [Validators.required]),
      email: new FormControl(this.employeeData.email, [Validators.required, Validators.email]),
      password: new FormControl(this.employeeData.password, [Validators.required, Validators.minLength(6)]),
      isAdmin: new FormControl(this.employeeData.isAdmin, [Validators.required]),
      isSuspended: new FormControl(this.employeeData.isSuspended, [Validators.required])
    });

    this.employeeForm.valueChanges.subscribe(updatedInfo => {
      this.employeesService.setSelectedEmployee(updatedInfo);
    })
  }

}
