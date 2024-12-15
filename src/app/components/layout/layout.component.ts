import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./side-nav/side-nav.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
  
export class LayoutComponent {}
