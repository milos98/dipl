export interface LeadModel {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    title?: string;
    contactMethod?: string;
    company?: string;
    website?: string;
    address?: string;
    floor?: number;
    city?: string;
    zip?: number;
    followUpDate: string;
    status: string;
    statusFriendlyName?: string;
    pipeline: number;
    notes?: string;
}