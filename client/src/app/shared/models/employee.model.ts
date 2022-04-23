import { LeadModel } from "./lead.model";

export interface EmployeeModel {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    isAdmin?: boolean;
    isSuspended?: boolean;
    pipeline?: number;
    token?: string;
    leads?: LeadModel[];
}