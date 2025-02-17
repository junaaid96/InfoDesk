import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserInfoComponent} from "./user-info/user-info.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path: 'user-info', component: UserInfoComponent},
  {path: 'user-list', component: UserListComponent},
  {path: '', redirectTo: '/user-info', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
