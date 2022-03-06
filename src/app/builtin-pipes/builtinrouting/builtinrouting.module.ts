import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuiltinPipesComponent } from '../builtin-pipes.component';





const routes: Routes = [
  {path:'s',component:BuiltinPipesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class BuiltinroutingModule { }
