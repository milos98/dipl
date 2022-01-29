import { LeadModel } from "./lead.model";

export interface EmployeeModel {
    info: {
        name: string;
        surname: string;
        pipeline: number;
    };
    leads: LeadModel[];
}