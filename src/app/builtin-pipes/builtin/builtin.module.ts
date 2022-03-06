import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltinPipesComponent } from '../builtin-pipes.component';
import { BuiltinroutingModule } from '../builtinrouting/builtinrouting.module';



@NgModule({
  declarations: [BuiltinPipesComponent],
  imports: [
    CommonModule,
    BuiltinroutingModule
  ]
})
export class BuiltinModule { }
