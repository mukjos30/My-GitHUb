import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { map } from 'rxjs/operator/';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = 'd4b8be163c33086c7dbc';
  private clientsecret = '039dcceec98769418500c846a0479b70ed5bd15df'
  


  constructor( private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'mukjos30';
  }

  getProfileInfo() {
    // interface ApiResponse {
    //   login: string;
    // }
    // tslint:disable-next-line:max-line-length
    return this. http.get('https://api.github.com/users/'  + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  //  .pipe(map(res => res.json()));
   }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  //     .pipe(map(res => res.json()));
   }

  updateProfile(username: string) {
    this.username = username;
  }
}