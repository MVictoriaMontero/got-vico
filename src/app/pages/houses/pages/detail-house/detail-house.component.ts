import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationHousesService } from '../../services/information-houses.service';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss']
})
export class DetailHouseComponent implements OnInit {

  public house: any;
  constructor(private rutaActiva: ActivatedRoute, private informationHousesServices: InformationHousesService) {
    console.log(this.rutaActiva.snapshot.paramMap.get('param'));
   }

  ngOnInit() {
    const name = this.rutaActiva.snapshot.paramMap.get('param');
    console.log(name)
    this.informationHousesServices.getDataByName(name).subscribe(
      (data) => {
        this.house = data[0];
        console.log(data);
      });
  }

}
