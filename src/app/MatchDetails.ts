export class MatchDetails{
    
    unique_id:string;
    firstCountry : string;
    secondCountry : string;
    location : string;
    date : string;
    constructor(unique_id,firstCountry,secondCountry,location,date){
        this.unique_id = unique_id;
        this.firstCountry = firstCountry;
        this.secondCountry = secondCountry;
        this.location = location;
        this.date = date;
    }
}