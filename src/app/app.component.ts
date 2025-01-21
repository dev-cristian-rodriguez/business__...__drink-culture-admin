import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

// Components
import { HomeComponent } from "../../src/app/home/home.component"

// NgModule
import { HomeModule } from "./home/export-component";

interface Person {
  name: string;
  age?: number;
}

class HEROES {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}


// import { Directive, ElementRef, inject } from '@angular/core';

// @Directive({
//   selector : ["plan_b"],
// })

// export class CustomElement {
//   private _element = inject(ElementRef);

//   constructor() {
//     this._element.nativeElement.style.backgroundColor = "red";
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeModule],
  template: `
    <h2 class="master-name"> controls heroes </h2>

    <profile-photo [master]="firstProperty" [secondProperty]="secondProperty" />
  `,
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',

  // template: `<button [disabled]="hasPendingChanges">ffff</button>`,
  // styles: ['h1 { color: papayawhip; text-decoration : underline }']
})

export class AppComponent {
  firstProperty: string;
  secondProperty: string;
  title: string;
  character: string;
  hasPendingChanges: boolean;
  people: Person[] = [{ name: "person1", age: 30 }, { name: "person2", age: 20, }, { name: "person3" }];
  eneabled: boolean = false;

  constructor() {
    this.title = 'Drink culture --- Admin view';
    this.hasPendingChanges = false;
    this.character = "Goku";
    this.firstProperty = "firstProperty";
    this.secondProperty = "secondPropertvvvvvvvy";
  }

  changeCharacter() {
    this.character = this.character === "Goku" ? "Vegeta" : "Goku";
  }
}
