import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterModel } from "../../../../shared/models/counter.model";
import { LeadsService } from "../../../../shared/leads/leads.service";
import { EmployeeModel } from "../../../../shared/models/employee.model";
import { EmployeesService } from "../../../../shared/employees/employees.service";
import { FilterModel } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-employee',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  modalShow = false;
  modalType = '';

  data: EmployeeModel[];
  counterData: CounterModel;

  constructor(
      private employeesService: EmployeesService,
      private leadsService: LeadsService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      this.employeesService.resetSelectedEmployee();
      this.leadsService.resetSelectedlead();
    }
  }

  fetchData() {
    this.leadsService.getAll(location.href).subscribe((res) => {
      this.data = this.leadsService.transformLeadObject(res);
      this.counterData = this.leadsService.counterData;
    });
  }

  toggleCategoryFilter(counter: string) {
    this.leadsService.toggleCategory(counter);
    this.fetchData();
  }

  selectLead(): void {
    this.modalShow = true;
    this.modalType = 'lead';
  }

  selectEmployee(): void {
    this.modalShow = true;
    this.modalType = 'employee';
  }

  setFilters(filter: FilterModel) {
    this.leadsService.setFilter(filter);
    this.fetchData();
  }

  updateLead() {
    this.leadsService.update().subscribe(
        () => {
          this.closeModal();
        }
    );
  }

  updateEmployee() {
    this.employeesService.update().subscribe(
        () => {
          this.closeModal();
        }
    );
  }

  closeModal() {
    this.modalShow = !this.modalShow;
    this.modalType = '';
    this.leadsService.resetSelectedlead();
    this.employeesService.resetSelectedEmployee();
    this.fetchData();
  }

}
