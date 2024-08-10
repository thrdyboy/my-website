export interface Teams { 
    sys: { id:  number | null | undefined; }; 
    fields: {
        name: string;  
        slug: string;
        profile: { fields: 
            { file: 
                { url: string; }; 
            }; 
        };
        hometown: string
    }
}