import { Component }  from '@angular/core';

import { UserService }  from './user.service';
import { Telephone }  from './telephone';

@Component({
  selector: 'search',
  template: `
              <h2>Search</h2>
              <div>
                <input type="text" [(ngModel)]="search_str"/>
                <button (click)="search(search_str)">Search</button>
              </div>
              <div *ngIf="telephones && telephones.length > 0">
                <h2>Telefonnummern der Person</h2>
                <ul class="users">
                  <li *ngFor="let tel of telephones">
                    <span class="badge">{{tel.id}}</span>{{tel.relation}}:
{{tel.tel_number}}
                  </li>
                </ul>
              </div>
            `
})

export class UserSearchComponent {
  telephones: Telephone[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;


  constructor(private userService: UserService) { }

  search(search_str: string): void{
    console.log("Gesucht:"+search_str);
    this.userService.searchFor(search_str)
        .subscribe(t => this.telephones = t,
                   e => this.errorMessage = e,
                   ()=> this.isLoading = false);
  }
}
