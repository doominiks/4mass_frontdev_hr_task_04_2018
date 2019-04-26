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
  public showPlanet: Planet[] = [];

  constructor(private _service: MainService) { }

  ngOnInit() {
    this.list = this._service.list;
    this.showPlanet = this._service.list;
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    this.showPlanet = this.list.filter(el => {
      return el.name.toLowerCase().indexOf(inputElement.value.toLowerCase()) > -1;
    });
  }
}
