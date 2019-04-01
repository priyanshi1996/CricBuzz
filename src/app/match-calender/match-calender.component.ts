import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { MatchDetails } from '../MatchDetails';
import { MatchCalender } from '../MatchCalender';


@Component({
  selector: 'app-match-calender',
  templateUrl: './match-calender.component.html',
  styleUrls: ['./match-calender.component.css']
})
export class MatchCalenderComponent implements OnInit {
  constructor(private httpDataService:HttpDataService) { }
  private matchCalender : MatchCalender[];
  private matchDetails : MatchDetails[]=[];
  
  ngOnInit() {
    this.httpDataService.getMatchCalender()
    .subscribe(response => {
      this.matchCalender = response.data; 
      // console.log(this.matchCalender);
      this.parseData();
    })
    
  }
  parseData(){
    // console.log("MatchCalender",this.matchCalender);
    for(let match of this.matchCalender){
      console.log("Match",match);
      let arr = match.name.split(" v ");
      let firstCountry = arr[0];
      arr = arr[1].split(" at ");
      let secondCountry = arr[0];
      arr = arr[1].split(",");
      let location = arr[0];
      console.log(firstCountry);
      this.matchDetails.push(new MatchDetails(match.unique_id,firstCountry,secondCountry,location,match.date));
    }
  }
}
