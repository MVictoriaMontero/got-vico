import { Component, OnInit } from '@angular/core';
import { InformationHousesService } from './services/information-houses.service';
import { SearchService } from 'src/app/shared/components/header/search/services/search.service';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  public houses = [];
  constructor(private informationHousesService: InformationHousesService,
   private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchedItems.subscribe(res => {
      this.houses = res;
      console.log(res);
    });
    // this.informationHousesService.getData().subscribe(
    //   (data) => {
    //     this.houses = data;
    //     console.log(data);
    //   }
    // );
  }

}
