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

  constructor(private _service: MainService) { }

  ngOnInit() {
    this.list = this._service.list;
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    const arrayTextContent = [];
    const inputValue = inputElement.value.toLowerCase().trim();
    if (inputValue) {
      for (let i = 0; i < this._service.list.length; i++) {
        if (this._service.list[i].name.toLowerCase().includes(inputValue)) {
          arrayTextContent.push(this._service.list[i]);
        }
      }
      this.list = arrayTextContent;
    } else {
      this.list = this._service.list;
    }
  }
}
