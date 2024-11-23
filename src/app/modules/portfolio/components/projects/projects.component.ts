import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src:'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width:'100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name:'Conheca o Blog',
          href: 'https://vidafullstack.com'
        }
      ]

    }
  ])
}
