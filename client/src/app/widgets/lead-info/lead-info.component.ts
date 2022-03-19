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
        firstName: this.leadData.contact.firstName,
        lastName: this.leadData.contact.lastName,
        email: this.leadData.contact.email,
        phone: this.leadData.contact.phone,
        title: this.leadData.contact.title,
        contactMethod: this.leadData.contact.contactMethod,
        company: this.leadData.company.company,
        website: this.leadData.company.website,
        address: this.leadData.company.address,
        floor: this.leadData.company.floor,
        city: this.leadData.company.city,
        zip: this.leadData.company.zip,
        followUpDate: this.leadData.deal.followUpDate,
        status: this.leadData.deal.status,
        statusFriendlyName: this.leadData.deal.statusFriendlyName,
        pipeline: this.leadData.deal.pipeline,
        notes: this.leadData.deal.notes
      });
    }
  }

}
