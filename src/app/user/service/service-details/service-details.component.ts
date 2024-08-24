import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [NavigationMenuComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {

}
