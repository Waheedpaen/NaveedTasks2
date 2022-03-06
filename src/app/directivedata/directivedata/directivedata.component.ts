import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedata',
  templateUrl: './directivedata.component.html',
  styleUrls: ['./directivedata.component.css']
})
export class DirectivedataComponent implements OnInit {
color='color';
  constructor() { }
  directiveList: any[] = [
    { id: 1, name: 'Ali', age: 11, fees: 1500, semester: 6 },
    { id: 2, name: 'Zubair', age: 12, fees: 1600, semester: 7 },
    { id: 1, name: 'Qassim', age: 13, fees: 1700, semester: 8 },
    { id: 1, name: 'Usman', age: 14, fees: 1800, semester: 9 },
    { id: 1, name: 'Abdullah', age: 15, fees: 1900, semester: 10 },

  ]
  ngOnInit(): void {
  }
  ngifData = false;
  ngIf() :void{
    this.ngifData = !this.ngifData
  }
  addclass(){
    let color ={
      color : this.color,
    }
    return color
  }
}
