import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})



export class TableComponent {
  people: Person[] = [
    {
      name: 'John Doe',
      age: 30,
    },
    {
      name: 'Jane Doe',
      age: 25,
    },
    {
      name: 'Jim Doe',
      age: 40,
    },
    {
      name: 'Jill Doe',
      age: 35,
    },
    {
      name: 'John Doe',
      age: 30,
    },
    {
      name: 'Jane Doe',
      age: 25,
    },
    {
      name: 'Jim Doe',
      age: 40,
    },
    {
      name: 'Jill Doe',
      age: 35,
    },
  ];
}
// @NgModule({
//   declarations: [TableComponent],
//   imports: [],
//   exports: [TableComponent]
// })

// export class TableComponentModule {

// }
