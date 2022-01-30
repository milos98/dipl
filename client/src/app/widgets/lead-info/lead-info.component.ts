import { Component, Input, OnInit } from '@angular/core';
import { LeadModel } from "../../shared/models/lead.model";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-lead-info',
  templateUrl: './lead-info.component.html',
  styleUrls: ['./lead-info.component.scss']
})
export class LeadInfoComponent implements OnInit {
  @Input() leadData: LeadModel | undefined;

  public leadForm: FormGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    contactMethod: '',
    company: '',
    website: '',
    address: '',
    floor: '',
    city: '',
    zip: '',
    followUpDate: '',
    status: '',
    statusFriendlyName: '',
    pipeline: '',
    notes: ''
  });

  constructor( private formBuilder: FormBuilder ) {  }

  ngOnInit(): void {
    if(this.leadData != undefined) {
      this.leadForm = this.formBuilder.group({
        firstName: this.leadData.firstName,
        lastName: this.leadData.lastName,
        email: this.leadData.email,
        phone: this.leadData.phone,
        title: this.leadData.title,
        contactMethod: this.leadData.contactMethod,
        company: this.leadData.company,
        website: this.leadData.website,
        address: this.leadData.address,
        floor: this.leadData.floor,
        city: this.leadData.city,
        zip: this.leadData.zip,
        followUpDate: this.leadData.followUpDate,
        status: this.leadData.status,
        statusFriendlyName: this.leadData.statusFriendlyName,
        pipeline: this.leadData.pipeline,
        notes: this.leadData.notes
      });
    }
  }

}
