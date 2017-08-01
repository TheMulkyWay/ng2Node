import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}, soon to be on Azure with Node server</h1>`,
})
export class AppComponent  { name = 'Angular'; }
