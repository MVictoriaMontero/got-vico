import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { InformationCharactersService } from '../../../../pages/characters/services/information-characters.service';
import { InformationHousesService } from '../../../../pages/houses/services/information-houses.service';
import { SearchService } from './services/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
form;
  public valueInput: any;
  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: FormBuilder,
    private informationCharactersService: InformationCharactersService,
    private informationHousesServices: InformationHousesService,
    private searchService: SearchService,
    public router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        search:['']
      }
    );

    this.searchData('');

    // this.form.get('search').valueChanges.subscribe(change =>{
    // console.log(change);
    // this.searchData(change);
    // });
  }
// hacer llamada de personajes con texto
//acto seguido enviar los personajes recibidos al observable
  
searchData(value) {
  console.log(value);
  if (this.router.url === '/characters')
  {
    if (value === '') {
      this.informationCharactersService.getData().subscribe(
        (data) => {
          this.searchService.searchedItems = data;
        }
      );
    } else {
    this.informationCharactersService.getDataByName(value).subscribe(
      (data: any) => {
        this.searchService.searchedItems = [data];
      }
    );
    }
  }
  else if (this.router.url === '/houses')
  {
    if (value === '') {
      this.informationHousesServices.getData().subscribe(
        (data) => {
          this.searchService.searchedItems = data;
        }
      );
    } else {
        this.informationHousesServices.getDataByName(value).subscribe(
          (data: any) => {
            this.searchService.searchedItems = [data[0]];
          }
        );
    }
  }


}
}
