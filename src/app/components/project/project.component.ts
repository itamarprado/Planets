import { Component, Input } from '@angular/core';

@Component({
  selector: 'ProjectComponent',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  @Input() title: string = 'Title'
  @Input() img: string = 'Image'
  @Input() description: string = 'Description of the project'
}

