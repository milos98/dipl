import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { EmployeeModel } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private readonly baseUrl = `${environment.apiUrl}/employees`;

  private selectedEmployee: EmployeeModel;

  constructor(
      private http: HttpClient,
  ) {
    this.resetSelectedEmployee();
  }

  getSelectedEmployee() {
    return this.selectedEmployee;
  }

  setSelectedEmployee(employee: EmployeeModel) {
    this.selectedEmployee = employee;
  }

  resetSelectedEmployee() {
    this.selectedEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      isAdmin: false,
      isSuspended: false
    }
  }

  create() {
    delete this.selectedEmployee._id;
    return this.http
        .post(this.baseUrl, this.selectedEmployee);
  }

  update(employeeObject: EmployeeModel) {
    const url = `${this.baseUrl}/${employeeObject._id}`;
    return this.http
        .patch(url, employeeObject);
  }
}
