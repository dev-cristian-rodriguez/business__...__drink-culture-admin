import { Component, Input, NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

@Component({
  selector: 'profile-photo',
  // standalone: true,

  template: `
    <h1> Child component </h1>
    <p> Information </p>
    <h4 class="master-name"> Master name is: {{masterName}} </h4>
    <h4> Second property is: {{secondProperty}} </h4>
    <input type="text" [value]="inputValue" />
  `,
  exportAs: 'profilePhoto',
  styleUrls: ['./home.component.css']
})

export class HomeComponentf {
  @Input('master') masterName: string;
  @Input("secondProperty") secondProperty: string;

  inputValue: string;

  constructor() {
    this.inputValue = 'fs';
    this.masterName = '';
    this.secondProperty = '';
  }
}

@NgModule({
  declarations: [HomeComponentf],
  imports: [CommonModule],
  exports: [HomeComponentf]
})

export class HomeModule {
}
