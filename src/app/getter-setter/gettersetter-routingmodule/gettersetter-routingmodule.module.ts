import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettersetterComponent } from '../gettersetter/gettersetter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'getsetter',component:  GettersetterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class GettersetterRoutingmoduleModule { }
