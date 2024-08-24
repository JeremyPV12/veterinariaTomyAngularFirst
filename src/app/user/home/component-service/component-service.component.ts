import { Component } from '@angular/core';
import { HomeLayaoutComponent } from '../home-layaout/home-layaout.component';
import { serviceList } from './component.mock';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component-service',
  standalone: true,
  imports: [HomeLayaoutComponent, NgFor,CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './component-service.component.html',
  styleUrl: './component-service.component.css'
})
export class ComponentServiceComponent {
  serviceLists = serviceList
}
