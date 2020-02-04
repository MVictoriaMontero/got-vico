import { Component, OnInit } from '@angular/core';
import { InformationCharactersService } from './services/information-characters.service';
import { SearchService } from 'src/app/shared/components/header/search/services/search.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters = [];

  constructor(private informationCharactersService: InformationCharactersService, private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchedItems.subscribe(res => {
      this.characters = res;
      console.log(res);
    });
    // this.informationCharactersService.getData().subscribe(
    //   (data) => {
    //     this.characters = data;
    //     console.log(data);
    //   }
    // );
  }

}
