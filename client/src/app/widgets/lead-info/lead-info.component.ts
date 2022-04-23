import { Component, OnInit } from '@angular/core';
import { LeadModel } from "../../shared/models/lead.model";
import { FormControl, FormGroup } from "@angular/forms";
import { LeadsService } from "../../shared/leads/leads.service";

@Component({
  selector: 'app-lead-info',
  templateUrl: './lead-info.component.html',
  styleUrls: ['./lead-info.component.scss']
})
export class LeadInfoComponent implements OnInit {
  leadData: LeadModel;

  public leadForm: FormGroup;

  constructor(
      private leadsService: LeadsService
  ) {  }

  ngOnInit(): void {
    this.leadData = this.leadsService.getSelectedLead();
    this.leadForm = new FormGroup({
      _id: new FormControl(this.leadData._id),
      contact: new FormGroup({
        firstName: new FormControl(this.leadData.contact.firstName),
        lastName: new FormControl(this.leadData.contact.lastName),
        email: new FormControl(this.leadData.contact.email),
        phone: new FormControl(this.leadData.contact.phone),
        title: new FormControl(this.leadData.contact.title),
        contactMethod: new FormControl(this.leadData.contact.contactMethod)
      }),
      company: new FormGroup({
        companyName: new FormControl(this.leadData.company.companyName),
        website: new FormControl(this.leadData.company.website),
        address: new FormControl(this.leadData.company.address),
        floor: new FormControl(this.leadData.company.floor),
        city: new FormControl(this.leadData.company.city),
        zip: new FormControl(this.leadData.company.zip)
      }),
      deal: new FormGroup({
        followUpDate: new FormControl(this.leadData.deal.followUpDate),
        dealStage: new FormControl(this.leadData.deal.dealStage),
        pipeline: new FormControl(this.leadData.deal.pipeline),
        notes: new FormControl(this.leadData.deal.notes)
      }),
      accountManager: new FormControl(this.leadData.accountManager)
    });

    this.leadForm.valueChanges.subscribe(updatedInfo => {
      this.leadsService.setSelectedLead(updatedInfo);
    })
  }

}
