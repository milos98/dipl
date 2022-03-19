export interface LeadModel {
    contact: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        title?: string;
        contactMethod?: string;
    },
    company: {
        company?: string;
        website?: string;
        address?: string;
        floor?: number;
        city?: string;
        zip?: number;
    },
    deal: {
        followUpDate: string;
        status: string;
        statusFriendlyName?: string;
        pipeline: number;
        notes?: string;
    }
}