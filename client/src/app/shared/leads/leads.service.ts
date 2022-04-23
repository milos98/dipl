import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { LeadModel } from "../models/lead.model";
import { EmployeeModel } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private readonly baseUrl = `${environment.apiUrl}/leads`;

  private selectedLead: LeadModel;

  constructor(
      private http: HttpClient
  ) {
    this.resetSelectedlead();
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

  getAll(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseUrl);
  }

  getAllUsersLeads(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.baseUrl}/me`);
  }

  update() {
    const url = `${this.baseUrl}/${this.selectedLead._id}`
    return this.http.patch(url, this.selectedLead);
  }
}
