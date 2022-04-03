import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeadModel } from "../../../../shared/models/lead.model";
import { LeadsService } from "../../../../shared/leads/leads.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data: LeadModel[] = [];
  @Output() selectedLead = new EventEmitter();

  constructor(private leadsService: LeadsService) { }

  ngOnInit(): void {
  }

  selectLead(lead: LeadModel): void {
    this.leadsService.setSelectedLead(lead);
    this.selectedLead.emit();
  }

}
