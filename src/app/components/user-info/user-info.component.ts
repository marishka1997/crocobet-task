import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/services/models/user.model';
import { Post } from 'src/app/services/models/posts.model';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  id!: number;
  user: User | undefined;
  posts: Post[] = [];
  userId: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['usersId'];

    this.apiService.find(this.id).subscribe((user: User) => {
      this.user = user;
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
