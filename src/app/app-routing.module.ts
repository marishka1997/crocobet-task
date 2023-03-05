import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent, } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  // {
  //   path: 'user-info/:usersId',
  //   component: UserInfoComponent
  // },
  // {
  //   path: 'user-info/:usersId/posts',
  //   component: UserPostsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
