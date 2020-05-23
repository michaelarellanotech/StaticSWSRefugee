import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .carousel-details > .p-grid {
            border: 1px solid #b3c2ca;
            border-radius: 3px;
            margin: 0.3em;
            text-align: center;
            /*padding: 2em 0 2.25em 0;*/
            padding: 3px;
        }
        /* .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
            font-weight: 700;
            font-size: 20px;
            margin-top: 24px;
        }
        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
            margin: 0.25em 0 2em 0;
        }
        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
            margin-left: 0.5em;
        }
        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
            margin-left: 0;
        } */
        .home-page .ui-carousel.custom-carousel .ui-carousel-dot-icon {
            width: 16px !important;
            height: 16px !important;
            border-radius: 50%;
        }
        .home-page .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .carousel-details > .p-grid {
            margin-left: 0.6em;
        }
        .home-page .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .carousel-details > .p-grid {
            margin-right: 0.6em;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  pics = [
    'rotate01.jpg',
    'rotate02.jpg',
    'rotate03.jpg',
    'rotate04.jpg',
    'rotate05.jpg',
    'rotate06.jpg',
    'rotate07.jpg',
    'rotate08.jpg',
    'rotate09.jpg'
  ];

  constructor() {
    this.responsiveOptions = [
      // {
      //     breakpoint: '1024px',
      //     numVisible: 3,
      //     numScroll: 3
      // },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  }

  ngOnInit() {
  }

}
