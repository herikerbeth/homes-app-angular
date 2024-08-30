import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="result">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styles: `./home.component.css`
})
export class HomeComponent {

}
