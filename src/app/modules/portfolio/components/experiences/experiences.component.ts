import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/experience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Especilista',
        p: 'ZUP | set 2020 - Present',
      },
      text: '<p> Desde setembro de 2020, atuo como analista de sistema especilista na zup, nas areas</p> ',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Everis | out 2019 - set 2020',
      },
      text: '<p> Durante meu periodo na everis de o </p> ',
    },
    {
      summary: {
        strong: 'Consultor Web',
        p: 'Everis | out 2019 - set 2020',
      },
      text: '<p>  Em minha jornada como consultor web</p>',
    },
  ]);
}
