export interface Features { 
    sys: { id:  number | null | undefined; }; 
    fields: {
        title: string;  
        slug: string;
        images: { fields: 
            { file: 
                { url: string; }; 
            }; 
        };
        category: string
    }
}