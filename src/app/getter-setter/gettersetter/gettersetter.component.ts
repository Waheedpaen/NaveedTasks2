import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gettersetter',
  templateUrl: './gettersetter.component.html',
  styleUrls: ['./gettersetter.component.css']
})
export class GettersetterComponent implements OnInit {
  private _fatherName: any;
  private _phoneNumber!: number;
  private _address!: string;

  constructor() { }

  ngOnInit(): void {
  }
  private _data :any;
  get nameValue() : string{
    return this._data;
  }

  set nameValue(data: string ){
     this._data = data;
  }

  get fatherName(): string {
    return this._fatherName;
  }
  set fatherName(data : string ){
    this._fatherName = data;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }
  set phoneNumber(data: number){
    this._phoneNumber = data
  }

  get address() : string {
   return  this._address ;
  }

  set address(data: string ){
    this._address = data;
  }
}
