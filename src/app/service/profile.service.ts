import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { map } from 'rxjs/operator/';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '21650433039275f62f68';
  private clientsecret = '066e5f636e71c35ee998c53973eb04b491abad28e'
  


  constructor( private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'mukjos30';
  }

  getProfileInfo() {
    // interface ApiResponse {
    //   login: string;
    // }
    // tslint:disable-next-line:max-line-length
    return this. http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  //  .pipe(map(res => res.json()));
   }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  //     .pipe(map(res => res.json()));
   }

  updateProfile(username: string) {
    this.username = username;
  }
}