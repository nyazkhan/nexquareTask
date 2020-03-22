import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentList = [];
  clickIndex: number;
  constructor() { }
  ngOnInit() {
  }
  addComponent() {
    this.componentList.push({ name: 'Component ', id: (this.componentList.length + 1) });
  }

  deleteComponent() {

    this.componentList.splice(this.componentList.findIndex((ele) => ele.id === this.clickIndex) , 1);
    console.log();
    
    $('#exampleModalLong').modal('hide');

  }

}
