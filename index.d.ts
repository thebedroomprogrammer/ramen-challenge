interface RamenResponse {
    Brand: string;
    Variety: string;
    Style: string;
    Country: string;
    Stars:number;
    "Top Ten": string;
}

interface Ramen {
    brand: string;
    variety: string;
    style: string;
    country: string;
    stars:number;
    ranking: Ranking | null;
}

interface Ranking {
    year: string; rank: number 
}