export interface LeadModel {
    _id?: string;
    contact: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        title?: string;
        contactMethod?: string;
    },
    company: {
        companyName?: string;
        website?: string;
        address?: string;
        floor?: number;
        city?: string;
        zip?: number;
    },
    deal: {
        followUpDate: string | null;
        dealStage: string;
        pipeline: number;
        notes?: string;
    },
    accountManager: string;
}