import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path:'pipe',  loadChildren:()=>import('./builtin-pipes/builtin/builtin.module').then((m)=>m.BuiltinModule)
  },
  { path:'directive',  loadChildren:()=>import('./directivedata/directivedata.module').then((m)=>m.DirectivedataModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
