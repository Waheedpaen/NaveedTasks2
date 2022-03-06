import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent implements OnInit {
data = 'this is laptop'
dateToday!:any;
data1 =  'HE IS READING BOOK';
num: number = 19.6321459;
money = 1960;
  constructor() { }
  ngOnInit(): void {
    this.dateToday = new Date()
  }

}
