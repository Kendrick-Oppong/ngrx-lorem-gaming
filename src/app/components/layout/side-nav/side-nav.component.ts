import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { navSteps } from '@constants/form-config.constants';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
  

export class SideNavComponent {
  readonly steps = navSteps;

  constructor(private router: Router) {}

  isRouteActive(path: string) {
    return this.router.url.includes(path);
  }
}
