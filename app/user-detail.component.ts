import { Component, Input } from '@angular/core';
import { User}  from './user';

@Component({
  selector: 'my-user-detail',
  template: `
              <div *ngIf="user">
                <h2>Kontakt: {{user.lastname}}</h2>
                <div><label>ID: </label>{{user.id}}</div>
                <div>
                  <label>Vorname: </label>
                  <input [(ngModel)]="user.firstname" placeholder="firstname"/>
                </div>
                <div>
                  <label>Nachname: </label>
                  <input [(ngModel)]="user.lastname" placeholder="lastname"/>
                </div>
              </div>
            `,
  styles: [`
      label {
        width: 90px;
        display: inline-block;
        margin: 0px;
        padding: 0px;
      }
  `]
})

export class UserDetailComponent {
  @Input()
  user: User;
}
