import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataConsistencyComponent } from './data-consistency/data-consistency.component';
import { DcUserComponent } from './data-consistency/dc-user/dc-user.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ObservableExamplesComponent } from './observable-examples/observable-examples.component';
import { PipesExamplesComponent } from './pipes/pipes-examples/pipes-examples.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'observable-examples', component: ObservableExamplesComponent },
    { path: 'content-projection', component: ContentProjectionComponent },
    { path: 'data-consistency', component: DataConsistencyComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'data-consistency/user/:id', component: DcUserComponent },
    { path: 'pipes', component: PipesExamplesComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
