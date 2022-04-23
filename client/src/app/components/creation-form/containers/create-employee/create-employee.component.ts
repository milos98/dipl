import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../../../shared/employees/employees.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(
      private employeesService: EmployeesService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  create() {
    if(this.validateData()) {
      this.employeesService.create().subscribe(
          (res) => {
            this.employeesService.resetSelectedEmployee();
            alert(res)
            this.router.navigate(['/admin']);
          },
          (error => {
            if (error.status === 409){
              alert('User with this email already exist!');
            }
            else {
              alert(error.message);
            }
          })
      );
    }
  }

  validateData() {
    let data = this.employeesService.getSelectedEmployee();
    let errorMessage = '';
    if (data.firstName.length <= 0) {
      errorMessage += 'First name is required!\n';
    }
    if (data.lastName.length <= 0) {
      errorMessage += 'Last name is required!\n';
    }
    if (data.password === undefined || data.password!.length <= 6) {
      errorMessage += 'Password is required and must be longer than 5 characters!\n';
    }
    if (data.email.length <= 0) {
      errorMessage += 'Email is required!'
    }
    if (errorMessage !== '') {
      alert(errorMessage);
      return false;
    }
    else {
      return true;
    }
  }
}
