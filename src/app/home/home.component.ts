import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentList = [];
  clickIndex: any;
  constructor() { }
  ngOnInit() {
  }
  addComponent() {
    this.componentList.push({ name: 'Component ', id: (this.componentList.length + 1) });
  }

  deleteComponent() {

    console.log(this.clickIndex);

    this.componentList.splice(this.clickIndex, 1);
    $('#exampleModalLong').modal('hide');

  }
  openModel(i) {
    this.clickIndex = i
    $('#exampleModalLong').modal('show');
  }
}
