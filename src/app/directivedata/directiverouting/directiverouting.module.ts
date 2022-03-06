import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltinPipesComponent } from 'src/app/builtin-pipes/builtin-pipes.component';
import { DirectivedataComponent } from '../directivedata/directivedata.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path:'directive',component: DirectivedataComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class DirectiveroutingModule { }
