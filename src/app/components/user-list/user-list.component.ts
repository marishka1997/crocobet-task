import { Component, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnDestroy {
  users: any;
  subscription!: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.subscription = this.apiService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
