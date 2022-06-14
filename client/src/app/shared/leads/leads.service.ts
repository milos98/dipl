import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { LeadModel } from "../models/lead.model";
import { EmployeeModel } from "../models/employee.model";
import { DatePipe } from "@angular/common";
import { CounterModel } from "../models/counter.model";
import { FilterModel } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private readonly baseUrl = `${environment.apiUrl}/leads`;

  private selectedLead: LeadModel;
  private counters: CounterModel;
  private selectedCategories: string[] = [];
  private filter: FilterModel | undefined;

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

  transformLeadObject(employees: EmployeeModel[]) {
    this.counterReset();
    return employees.map((employee) => {
      let totalPipeline = 0;
      employee.pipeline = totalPipeline;

      employee.leads!.forEach((lead) => {
        this.counterData[lead.deal.dealStage].count += 1;
        lead.deal.followUpDate = this.datePipe.transform(lead.deal.followUpDate, 'yyyy-MM-dd');
        totalPipeline += lead.deal.pipeline;
        return true;
      });

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

  get counterData() {
    return this.counters;
  }

  getSelectedLead() {
    return this.selectedLead;
  }

  setSelectedLead(lead: LeadModel) {
    this.selectedLead = lead;
  }

  setFilter(filter: FilterModel | undefined) {
    this.filter = filter;
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

  queryStringMaker() {
    let query = '';
    if(this.filter !== undefined) {
      query += Object.keys(this.filter).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(this.filter![key as keyof FilterModel]);
      }).join('&');
    }
    if(this.selectedCategories.length > 0) {
      if(query) {
        query += '&';
      }
      query += this.selectedCategories.map((selecetdCategory) => {
        return `dealStage=${selecetdCategory}`;
      }).join('&');
    }
    return query;
  }

  create() {
    delete this.selectedLead._id;
    return this.http.post(this.baseUrl, this.selectedLead);
  }

  getAll(location: string): Observable<EmployeeModel[]> {
    let url = this.baseUrl;
    let query = this.queryStringMaker();
    if(location.indexOf('admin') === -1) {
      url = url + '/me';
    };
    if(query.length > 0) {
      url += `?${query}`;
    }
    return this.http.get<EmployeeModel[]>(url);
  }

  update() {
    const url = `${this.baseUrl}/${this.selectedLead._id}`
    return this.http.patch(url, this.selectedLead);
  }
}
