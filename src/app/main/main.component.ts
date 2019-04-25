import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list: Planet[] = [];
  public updatedList: Planet[] = [];


  constructor(private _service: MainService) { }

  ngOnInit() {
    this.list = this._service.list;
    this.updatedList = this._service.list;
  }

  onSearchValueChanges(filterValue: string) {
    let searchedValue = filterValue.toLowerCase();
    this.updatedList = this.list.filter((el) => {
      let nameValue = el.name.toLowerCase();
      let climateValue = el.climate.toLowerCase();
      let terrainValue = el.terrain.toLowerCase();
      let gravityValue = el.gravity.toLowerCase();
      return nameValue.indexOf(searchedValue) !== -1 || climateValue.indexOf(searchedValue) !== -1 || terrainValue.indexOf(searchedValue) !== -1 || gravityValue.indexOf(searchedValue) !== -1;
    })
  }
}



