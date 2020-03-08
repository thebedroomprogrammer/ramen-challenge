import axios from "axios";
import { RAMEN_API, countryAlpha3, countryAlpha2 } from "./constants";

export const getRamen = async (): Promise<Ramen[]> => {
    return axios
        .get(RAMEN_API)
        .then(res => res.data as RamenResponse[])
        .then(processRamenResponse)
        .catch(() => {
            console.log("Error in getting ramen");
            return null as Ramen[];
        });
};

export const onlyUnique =(value, index, self)=> { 
    return self.indexOf(value) === index;
}

export const processRamenResponse = (ramenList: RamenResponse[]): Ramen[] => {
    const ramenListNew = ramenList.map((ramen: RamenResponse) => {
        return {
            brand: ramen.Brand,
            variety: ramen.Variety,
            style: ramen.Style,
            country:
                ramen.Country.length === 3
                    ? countryAlpha3[ramen.Country]
                    : ramen.Country.length === 2
                    ? countryAlpha2[ramen.Country]
                    : ramen.Country,
            stars: typeof ramen.Stars === "string" ? 0 : ramen.Stars,
            ranking:
                ramen["Top Ten"] === "NaN"
                    ? null
                    : processRanking(ramen["Top Ten"])
        };
    });
    return ramenListNew;
};

export const processRanking = (ranking: String): Ranking => {
    const splittedRank = ranking.split("#");
    return {
        year: splittedRank[0],
        rank: parseInt(splittedRank[1])
    };
};
