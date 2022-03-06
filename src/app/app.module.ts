import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltinModule } from './builtin-pipes/builtin/builtin.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuiltinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
