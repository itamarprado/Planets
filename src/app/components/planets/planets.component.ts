import { Component } from '@angular/core';
import { PlanetComponent } from '../planet/planet.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [PlanetComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {

}
