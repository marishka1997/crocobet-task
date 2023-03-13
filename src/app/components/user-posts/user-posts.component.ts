import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/services/models/posts.model';
import { User } from 'src/app/services/models/user.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  userId: any;
  posts: Post[] = [];
  users: User[] = [];
  id: any;

  subscription!: Subscription;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['usersId'];
    this.subscription = this.apiService.findPost(this.userId).subscribe((posts: Post[]) => {
      this.posts = posts;
    });

    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  list(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
