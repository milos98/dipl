import { Component, OnInit } from '@angular/core';
import { LeadsService } from "../../../../shared/leads/leads.service";

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss']
})
export class CreateLeadComponent implements OnInit {

  constructor(private leadsService: LeadsService) { }

  ngOnInit(): void {
  }

  create() {
    this.leadsService.create().subscribe(
        (res) => {
          alert('Lead created!');
          this.leadsService.resetSelectedlead();
          window.location.reload();
        });
  }
}
