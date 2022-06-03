import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  studentLIst:any=[
    {id: 1,name: 'Waheed',age: 11,fees:1500,semester:6 },
    {id: 2,name: 'Zubair',age: 12,fees:1600,semester:7 },
    {id: 3,name: 'Ali',age: 13,fees:1700,semester:8 },
    {id: 4,name: 'Usman',age: 14,fees:1800,semester:9 },
    {id: 5,name: 'Abdullah',age: 15,fees:1900,semester:10 },
  ]
  constructor() {
  console.log(this.studentLIst.slice(1,4))
  this.studentLIst.push(
    {id: 7,name: 'Abdullah7',age: 15,fees:1900,semester:10 },
    {id: 8,name: 'Abdullah8',age: 15,fees:1900,semester:10 },
    {id: 9,name: 'Abdullah9',age: 15,fees:1900,semester:10 },
  )
  this.studentLIst.unshift({id: 6,name: 'Waheed',age: 11,fees:1500,semester:6 },
  {id: 7,name: 'Zubair',age: 12,fees:1600,semester:7 })
this.studentLIst.reverse();
this.studentLIst.include();
this.studentLIst.filter(data=>data.name.startsWith('sam'))

   }

  ngOnInit(): void {
  }

}
