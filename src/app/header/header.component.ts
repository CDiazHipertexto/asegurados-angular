import { Component, OnInit, HostListener } from '@angular/core';
// @ts-ignore
import itemsMenu from 'src/assets/itemsMenu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isHovering = false;
  isHoveringSub = false;

  itemsMenuu = [
    {
      "item":  "Acerca de nosotros",
      "subItems": [
        {
          "item": "Misión"
        },
        {
          "item": "Visión"
        }]
    },
    {
      "item":  "Descarga tu Poliza",
      "subItems": [
        {
          "item": "Item Descarga"
        }]
    },
    {
      "item":  "Términos y condiciones",
      "subItems": [
        {
          "item": "Item TyC"
        }]
    }];

  activeToggle = false;
  toggleMenu(){
    this.activeToggle = !this.activeToggle
  };

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 150;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
