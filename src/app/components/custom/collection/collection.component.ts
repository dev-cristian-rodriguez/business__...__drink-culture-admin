import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: false,
  // imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})

export class CollectionComponent {

}


@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule],
  exports: [CollectionComponent]
})
export class CollectionComponentModule { }
