import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <my-users></my-users>
            `
})

export class AppComponent{
  title = 'Mein Telefonbuch';

}
