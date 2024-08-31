import { Component } from '@angular/core';
import { HomeLayaoutComponent } from '../home-layaout/home-layaout.component';
import { listProduct } from './component..mock';
import { CurrencyPipe, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-component-products',
  standalone: true,
  imports: [HomeLayaoutComponent, NgFor, CurrencyPipe, UpperCasePipe],
  templateUrl: './component-products.component.html',
  styleUrl: './component-products.component.css'
})
export class ComponentProductsComponent {

  /* elements = listProduct; */
  elements = listProduct;

}
