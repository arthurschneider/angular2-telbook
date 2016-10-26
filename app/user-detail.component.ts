import { Component, Input } from '@angular/core';

import { User }  from './user';
import { UserService }  from './user.service';
import { Telephone }  from './telephone';

@Component({
  selector: 'my-user-detail',
  template: `
              <div *ngIf="telephones">
                <h2>Telefonnummern der Person</h2>
                <ul class="users">
                  <li *ngFor="let tel of telephones">
                    <span class="badge">{{tel.id}}</span>{{tel.relation}}:
{{tel.tel_number}}
                  </li>
                </ul>
              </div>
            `,
  styles: [`
      .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .users {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .users li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .users li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .users li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .users .text {
    position: relative;
    top: -3px;
  }
  .users .badge {
    width: 16px;
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
      label {
        width: 90px;
        display: inline-block;
        margin: 0px;
        padding: 0px;
      }
  `]
})

export class UserDetailComponent{
  @Input()
  telephones: Telephone[];
}
