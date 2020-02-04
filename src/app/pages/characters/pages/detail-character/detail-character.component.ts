import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { InformationCharactersService } from '../../services/information-characters.service';
import { InformationHousesService} from '../../../houses/services/information-houses.service';


@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  public character: any;
  public houseCharacter: any;

  // tslint:disable-next-line: max-line-length
  constructor(private rutaActiva: ActivatedRoute, private informationCharactersService: InformationCharactersService, private informationHousesService: InformationHousesService) {
    console.log(this.rutaActiva.snapshot.paramMap.get('param'));
  }

  ngOnInit() {
    const name = this.rutaActiva.snapshot.paramMap.get('param');
    const volver = this.rutaActiva.parent.url.subscribe((urlPath) => {
      const url = urlPath[urlPath.length - 1].path;
  });
    this.informationCharactersService.getDataByName(name).subscribe(
      (data) => {
        this.character = data;
      }
    );
    this.informationHousesService.getHouseCharacter('House%20Stark').subscribe(
      (data) => {
        this.houseCharacter = data[0];
      }
    );
    
  }


}
