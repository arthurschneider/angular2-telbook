import { Injectable }               from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';
import { Observable }               from 'rxjs/Rx';

import { User }       from './user';
import { Telephone }  from './telephone';

@Injectable()
export class UserService {
  private baseUrl: string = 'http://localhost:8080';

  constructor( private http: Http){}

  getUsers(): Observable<User[]>{
    let users = this.http
      .get('http://localhost\:8080/user/list')
      .map(mapUsers)
      .catch(handleError);

    return users;
  }

  getPhoneForUserID(id: number): Observable<Telephone[]>{
    let telephones = this.http
      .get('http://localhost\:8080/telephone/user/' + id)
      .map(mapTelephones)
      .catch(handleError);

    return telephones;
  }

  searchFor(search_str: string): Observable<Telephone[]>{
    let telephones = this.http
      .get('http://localhost\:8080/user/search/telnumber/' + search_str)
      .map(mapTelephones)
      .catch(handleError);

    return telephones;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }
}
  function mapUsers(response: Response): User[]{
    return response.json().map(toUser)
  }

  function mapTelephones(response: Response): Telephone[]{
    console.log("Map Telephones!");
    return response.json().map(toTelephone)
  }

  function toTelephone(r: any): Telephone{
    let telephone = <Telephone>({
      id: r.id,
      tel_number: r.tel_number,
      relation: r.relation,
    });
    console.log('Parsed telephone:', telephone);
    return telephone;
  }

  function toUser(r: any): User{
    let user = <User>({
      id: r.id,
      firstname: r.firstname,
      lastname: r.lastname,
    });
    return user;
  }

  function handleError (error: any){
    let errorMsg = error.message || `Fehler! Die Daten konnten nicht empfangen werden!`
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
