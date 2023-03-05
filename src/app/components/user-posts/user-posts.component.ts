import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  userId:any
  posts:any
  users:any
  id:any

  subscription!: Subscription;

    constructor(private apiService: ApiService, private router: Router,  private route: ActivatedRoute,) { }

    ngOnInit(): void {

      this.userId = this.route.snapshot.params['usersId'];

     this.subscription = this.apiService.findPost(this.userId).subscribe((Posts: any)=>{
        this.posts = Posts
      });
    }

    list(){
      this.router.navigate(['/']);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
