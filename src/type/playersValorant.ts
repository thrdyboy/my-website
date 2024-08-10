export interface PlayersofValorant { 
    sys: { id:  number | null | undefined; }; 
    fields: {
        name: string;  
        slug: string;
        images: { fields: 
            { file: 
                { url: string; }; 
            }; 
        };
        agents: string
    }
}