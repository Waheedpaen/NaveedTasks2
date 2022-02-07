import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'EntityDto/teacher';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
@Input() studentList:Student[] = [];



  ngOnInit(): void {

  }

}
