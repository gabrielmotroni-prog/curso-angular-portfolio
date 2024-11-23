import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { KnownledgeComponent } from '../components/knownledge/knownledge.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { ProjectsComponent } from '../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnownledgeComponent,ExperiencesComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
