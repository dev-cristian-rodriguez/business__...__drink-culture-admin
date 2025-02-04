import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  // imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

}

@NgModule({
  declarations: [TableComponent],
  imports: [],
  exports: [TableComponent]
})

export class TableComponentModule {

}
