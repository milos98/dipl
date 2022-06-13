import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { LeadModel } from "../models/lead.model";
import { EmployeeModel } from "../models/employee.model";
import { DatePipe } from "@angular/common";
import { CounterModel } from "../models/counter.model";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private readonly baseUrl = `${environment.apiUrl}/leads`;

  private fetchedData: EmployeeModel[];
  private filteredData: EmployeeModel[];
  private selectedLead: LeadModel;
  private counters: CounterModel;
  private selectedCategories: string[] = [];
  private filters = {};

  constructor(
      private http: HttpClient,
      private datePipe: DatePipe
  ) {
    this.resetSelectedlead();
  }

  counterReset() {
    this.counters = {
      prospecting: {
        count: 0,
        selected: this.selectedCategories.includes('prospecting')
      },
      qualified: {
        count: 0,
        selected: this.selectedCategories.includes('qualified')
      },
      quoting: {
        count: 0,
        selected: this.selectedCategories.includes('quoting')
      },
      won_closed: {
        count: 0,
        selected: this.selectedCategories.includes('won_closed')
      }
    };
  }

  filter(employees: EmployeeModel[]) {
    this.counterReset();
    this.fetchedData = employees;
    this.filteredData = this.fetchedData.map((employee) => {
      let totalPipeline = 0;
      employee.leads = employee.leads!.filter((lead) => {
        this.counterData[lead.deal.dealStage].count += 1;
        if (this.selectedCategories.length !== 0 && !this.selectedCategories.includes(lead.deal.dealStage)) {
          return false;
        }
        lead.deal.followUpDate = this.datePipe.transform(lead.deal.followUpDate, 'yyyy-MM-dd');
        totalPipeline += lead.deal.pipeline;
        return true;
      });
      employee.pipeline = totalPipeline;
      return employee;
    });
  }

  toggleCategory(counter: string) {
    this.selectedCategories = [];
    for (const key in this.counters) {
      if (counter === key) {
        // @ts-ignore
        this.counters[key].selected = !this.counters[key].selected;
      }
      if (this.counters[key].selected) {
        this.selectedCategories.push(key);
      }
    }
  }

  get leadData(): EmployeeModel[] {
    return this.filteredData;
  }

  get counterData() {
    return this.counters;
  }

  getSelectedLead() {
    return this.selectedLead;
  }

  setSelectedLead(lead: LeadModel) {
    this.selectedLead = lead;
  }

  resetSelectedlead() {
    this.selectedLead = {
      _id: '',
      accountManager: '',
      company: {
        companyName: '',
        website: '',
        address: '',
        floor: 0,
        city: '',
        zip: 0
      },
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        title: '',
        contactMethod: ''
      },
      deal: {
        followUpDate: new Date().toDateString(),
        dealStage: '',
        pipeline: 0,
        notes: ''
      }
    };
  }

  create() {
    delete this.selectedLead._id;
    return this.http.post(this.baseUrl, this.selectedLead);
  }

  getAll(location: string): Observable<EmployeeModel[]> {
    let url = this.baseUrl;
    if(location.indexOf('admin') === -1) {
      url = url + '/me';
    }
    return this.http.get<EmployeeModel[]>(url);
  }

  update() {
    const url = `${this.baseUrl}/${this.selectedLead._id}`
    return this.http.patch(url, this.selectedLead);
  }
}
