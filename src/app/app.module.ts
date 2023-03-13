import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupNamesComponent } from './group-names/group-names.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Todo } from "./models/Todo";


@NgModule({
  declarations: [AppComponent, GroupNamesComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
