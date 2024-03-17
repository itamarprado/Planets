import { Component, Input } from '@angular/core';

@Component({
  selector: 'PlanetComponent',
  standalone: true,
  imports: [],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.css'
})

export class PlanetComponent {
  @Input() title: string = 'Title'
  @Input() img: string = 'Image'
  @Input() description: string = 'Description of the planet'
}

