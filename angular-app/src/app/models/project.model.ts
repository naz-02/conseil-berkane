export interface Project {
    id: number;
    titleFr: string;
    titleAr: string;
    category: string;
    categoryId?: string;
    imageUrl: string;
    gallery: string[];
    descriptionFr: string;
    descriptionAr: string;
    cost: string;
    location: string;
    partnersFr?: string;
    partnersAr?: string;
    partnerImages?: string[];
    status: string;
    isMain: boolean;
}
