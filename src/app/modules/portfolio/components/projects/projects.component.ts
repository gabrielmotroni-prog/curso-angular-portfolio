import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../enum/EDialogPanelClass.enum';

import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name: 'Conheca o Blog',
          href: 'https://vidafullstack.com',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name: 'Conheca o Blog',
          href: 'https://vidafullstack.com',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name: 'Conheca o Blog',
          href: 'https://vidafullstack.com',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name: 'Conheca o Blog',
          href: 'https://vidafullstack.com',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida Fullstack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      description: 'projeto ...',
      links: [
        {
          name: 'Conheca o Blog',
          href: 'https://vidafullstack.com',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
