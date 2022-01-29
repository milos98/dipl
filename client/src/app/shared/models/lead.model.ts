export interface LeadModel {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    status: string;
    statusFriendlyName?: string;
    followUpDate: string;
    pipeline: number;
}