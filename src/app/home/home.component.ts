import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

export class HomeComponent {
  @Input('master') masterName: string = '';
  @Input("secondProperty") secondProperty: string = '';

  inputValue: string;

  constructor() {
    this.inputValue = 'fs';
  }


}
