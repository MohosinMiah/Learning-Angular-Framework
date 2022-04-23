import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, BookComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
