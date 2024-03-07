import { Component } from '@angular/core';
import link from '../../interfaces/LinkItem'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  links: link[] = [
    { name: 'Projects', route: 'projects' },
    { name: 'About Me', route: 'about' },
    { name: 'Resume', route: 'resume' }
  ]

  // Default constructor
  constructor() { }
}
