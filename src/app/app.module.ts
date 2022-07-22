import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InlineCompComponent } from './inline-comp/inline-comp.component';
import { NoTestComponent } from './no-test/no-test.component';
import { BindingComponent } from './binding/binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LcChildComponent } from './lifecycle-hooks/lc-child/lc-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { UsersComponent } from './content-projection/users/users.component';
import { FormsComponent } from './forms/forms.component';
import { TdFormsComponent } from './forms/td-forms/td-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { MatInputModule } from '@angular/material/input';
import { DataConsistencyComponent } from './data-consistency/data-consistency.component';
import { DcChildComponent } from './data-consistency/dc-child/dc-child.component';
import { ObservableExamplesComponent } from './observable-examples/observable-examples.component';
import { SubjectComponent } from './observable-examples/subject/subject.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DcUserComponent } from './data-consistency/dc-user/dc-user.component';
import { PipesExamplesComponent } from './pipes/pipes-examples/pipes-examples.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    InlineCompComponent,
    NoTestComponent,
    BindingComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    LifecycleHooksComponent,
    LcChildComponent,
    ContentProjectionComponent,
    UsersComponent,
    FormsComponent,
    TdFormsComponent,
    ReactiveFormsComponent,
    DataConsistencyComponent,
    DcChildComponent,
    ObservableExamplesComponent,
    SubjectComponent,
    NavBarComponent,
    DcUserComponent,
    PipesExamplesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
