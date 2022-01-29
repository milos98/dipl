import { Component, Input, OnInit } from '@angular/core';
import { LeadModel } from "../../../../shared/models/lead.model";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() data: LeadModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
