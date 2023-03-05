import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  id!: number;
  user: any;
  posts: any;
  userId: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['usersId'];

    this.apiService.find(this.id).subscribe((user: any) => {
      this.user = user;
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
