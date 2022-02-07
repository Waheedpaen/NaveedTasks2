
import { Component, EventEmitter,OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
 teacherList:Teacher[] = [
    {id: 1,name: 'Waheed Ullah',age: 19,salary:1100 },
    {id: 2,name: 'Zubair Ahamd',age: 12,salary:1300  },
    {id: 3,name: 'Razwan',age: 13,salary:1700  },
    {id: 4,name: 'Shazoor',age: 14,salary:1500  },
    {id: 5,name: 'Jon',age: 15,salary:1800 },

  ]

  @Output() teacherLists  = new EventEmitter<any>();
  @Output() teacherListButton  = new EventEmitter<any>();
  ngOnInit()  {
    this.teacherLists.emit(this. teacherList);

  }
teacherData(){
  this.teacherListButton.emit(this. teacherList);
}
}


