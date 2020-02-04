import { Component, OnInit } from '@angular/core';
import { InformationCharactersService } from '../characters/services/information-characters.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {


  constructor(private informationCharacterService: InformationCharactersService) { }

  characters = [];
  ngOnInit() {
   this.informationCharacterService.getData().subscribe(
     (data) => {
        this.characters = data;
     }
   )
  }

}
