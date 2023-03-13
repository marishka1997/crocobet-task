import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { Post } from './models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getPosts(): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts`);
  }
  find(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  findPost(userId:any): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
  }
}
