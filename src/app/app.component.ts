import { Component, OnInit } from '@angular/core';
import { Student, Teacher } from 'EntityDto/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
teacherList:Teacher[]=[];
teacherListButton:Teacher[]=[];
  studentList:Student[] = [
    {id: 1,name: 'Waheed',age: 11,fees:1500,semester:6 },
    {id: 2,name: 'Zubair',age: 12,fees:1600,semester:7 },
    {id: 1,name: 'Ali',age: 13,fees:1700,semester:8 },
    {id: 1,name: 'Usman',age: 14,fees:1800,semester:9 },
    {id: 1,name: 'Abdullah',age: 15,fees:1900,semester:10 },

  ]
  constructor() { }

  ngOnInit(): void {
  }


dataOutPut(data:any){
  console.log(data);
  data.forEach((datas:any) =>{
data= new Teacher();
data.id= datas.id,
data.name = datas.name,
data.age= datas.age
data.salary = datas.salary
 this.teacherList.push(data);
  });

console.log(this.teacherList);
}


dataOutPutButton(data:any){
  console.log(data);
this.teacherListButton = data;
}
}
