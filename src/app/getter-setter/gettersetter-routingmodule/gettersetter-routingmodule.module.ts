import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettersetterComponent } from '../gettersetter/gettersetter.component';
import { RouterModule, Routes } from '@angular/router';
import { MethodsComponent } from '../methods/methods.component';

const routes: Routes = [
  {path:'getsetter',component:  GettersetterComponent },
  {path:'loginData',component:  MethodsComponent }
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
