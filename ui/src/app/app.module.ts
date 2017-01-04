import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonDetailComponent} from "./person-detail/person-detail.component";
import {PersonService} from "./person.service";

const appRoutes:Routes = [
  {path: 'person', component: PersonListComponent},
  {path: 'person/:id', component: PersonDetailComponent},
  {
    path: '**',
    redirectTo: '/person',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
