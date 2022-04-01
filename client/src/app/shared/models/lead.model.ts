export interface LeadModel {
    id?: string;
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
        dealStage: string;
        pipeline: number;
        notes?: string;
    },
    accountManager?: string;
}