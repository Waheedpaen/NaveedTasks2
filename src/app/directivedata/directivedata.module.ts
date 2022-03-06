import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivedataComponent } from './directivedata/directivedata.component';
import { DirectiveroutingModule } from './directiverouting/directiverouting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DirectivedataComponent ,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
DirectiveroutingModule
  ]
})
export class DirectivedataModule { }
