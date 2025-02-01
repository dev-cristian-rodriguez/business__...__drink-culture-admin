import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-component-1',
  standalone: false,
  // imports: [],
  template: `<span class="loader"></span>`,
  // templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.css'
})

export class LoaderComponent1 {

}

@Component({
  selector: 'app-loader-component-2',
  standalone: false,
  // imports: [],
  template: `<span class="loader-2"></span>`,
  // templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.css'
})

export class LoaderComponent2 {

}


@NgModule({
  declarations: [LoaderComponent1, LoaderComponent2],
  imports: [CommonModule],
  exports: [LoaderComponent1, LoaderComponent2]
})

export class LoadersComponentModule {
}
