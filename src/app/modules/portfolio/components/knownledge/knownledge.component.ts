import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knownledge',
  standalone: true,
  imports: [],
  templateUrl: './knownledge.component.html',
  styleUrl: './knownledge.component.scss'
})
export class KnownledgeComponent {


  public arrayKnoledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: "Icone de conhecimento de html5"
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: "Icone de conhecimento de css3"
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: "Icone de conhecimento de javascript"
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: "Icone de conhecimento de angular"
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: "Icone de conhecimento de java"
    }
  ])

}
