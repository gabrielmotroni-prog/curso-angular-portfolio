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
        strong: 'Analista de Software Sênior',
        p: 'Qintess | Dez 2024 - Atual',
      },
      text: '<p> Desde Dezembro de 2024, atuo como análista de sistema sênior fullstack na Qintess, atuando em consultoria no cliente banco do brasil</p> ',
    },
    {
      summary: {
        strong: 'Application Developer',
        p: 'IBM | Out 2022 - Nov 2024',
      },
      text: '<p> Atuei como desenvolvedor junior e apos um ano fui reconhecido com um promocação na empresa. Atuei como desenvolvedor fullstack em consultoria  </p> ',
    },
    {
      summary: {
        strong: 'Application Developer Intern',
        p: 'IBM | Nov 2021 - Out 2022',
      },
      text: '<p> Durante meu periodo estágio na IBM </p> ',
    },
  ]);
}
