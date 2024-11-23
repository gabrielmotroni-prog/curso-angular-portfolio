import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { KnownledgeComponent } from '../components/knownledge/knownledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnownledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
