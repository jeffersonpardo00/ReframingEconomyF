import { People } from './people.model';

export class ObjetoServicio{
    page: number;
    per_page: string;
    total: string;
    total_pages: string;
    data: People[];
    company: string;
    utl: string;
    text: string;
}