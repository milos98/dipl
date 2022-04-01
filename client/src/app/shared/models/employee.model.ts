import { LeadModel } from "./lead.model";

export interface EmployeeModel {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    pipeline?: number;
    leads: LeadModel[];
}