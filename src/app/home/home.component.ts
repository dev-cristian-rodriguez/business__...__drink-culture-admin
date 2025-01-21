import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

// class Hero {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

@Component({
  selector: 'profile-photo',
  // standalone: true,
  template: `
    <h1> Child component </h1>
    <p> Information </p>
    <h4> Master name is: {{masterName}} </h4>
    <h4> Second property is: {{secondProperty}} </h4>
  `,
  exportAs: 'profilePhoto',
})

export class HomeComponent  {
  // @Input() hero!: Hero;
  @Input('master') masterName : string = '';
  @Input("secondProperty") secondProperty : string = '';
}
