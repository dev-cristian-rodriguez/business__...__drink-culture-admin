import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: false,
  // imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})

export class PreviewComponent {

}

@NgModule({
  declarations: [PreviewComponent],
  imports: [],
  exports: [PreviewComponent]
})

export class PreviewComponentModule {

}
