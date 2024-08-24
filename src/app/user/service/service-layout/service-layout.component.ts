import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";
import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';
import { serviceList } from '../../home/component-service/component.mock';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterPageComponent } from "../../footer-page/footer-page.component";

@Component({
  selector: 'app-service-layout',
  standalone: true,
  imports: [NavigationMenuComponent, NgFor, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FooterPageComponent],
  templateUrl: './service-layout.component.html',
  styleUrl: './service-layout.component.css'
})
export class ServiceLayoutComponent {
  serviceLists = serviceList
}
