import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettersetterComponent } from './gettersetter/gettersetter.component';
import { GettersetterRoutingmoduleModule } from './gettersetter-routingmodule/gettersetter-routingmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MethodsComponent } from './methods/methods.component';



@NgModule({
  declarations: [
    GettersetterComponent,
    MethodsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  GettersetterRoutingmoduleModule
  ]
})
export class GetterSetterModule { }
