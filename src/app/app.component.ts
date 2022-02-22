import { Component  } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { ICarouselItem } from './carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from './data/constants/carousel.const';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'asegurados-an';
  faCoffee = faCoffee;

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
}
