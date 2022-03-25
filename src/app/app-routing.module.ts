import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path:'pipe',  loadChildren:()=>import('./builtin-pipes/builtin/builtin.module').then((m)=>m.BuiltinModule)
  },
  { path:'directive',  loadChildren:()=>import('./directivedata/directivedata.module').then((m)=>m.DirectivedataModule)
},
{ path:'get',  loadChildren:()=>import('./getter-setter/getter-setter.module').then((m)=>m.GetterSetterModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
