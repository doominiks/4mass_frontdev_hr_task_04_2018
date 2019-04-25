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

  constructor(private _service: MainService) {}

  ngOnInit() {
    this.list = this._service.list;
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    let searchTerm = inputElement.value;
    const originalList = this._service.list;

    if (searchTerm === '') {
      this.list = originalList;
    }

    this.filterList(originalList, searchTerm);
  }

  filterList(originalList: any[], searchTerm: string) {
    this.list = originalList.filter(planet => {
      return planet.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1;
    });
  }
}
