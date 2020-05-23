import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CarService } from '../service/carservice';
import { CountryService } from '../service/countryservice';
import { NodeService } from '../service/nodeservice';
import { Car } from '../domain/car';
import { SelectItem, MenuItem, TreeNode } from 'primeng/primeng';

@Component({
    templateUrl: './sampledemo.component.html',
    styles: [`
		.ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {
			border: 1px solid #b3c2ca;
			border-radius: 3px;
			margin: 0.3em;
			text-align: center;
			padding: 2em 0 2.25em 0;
		}
		.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
			font-weight: 700;
			font-size: 20px;
			margin-top: 24px;
		}
		.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
			margin: 0.25em 0 2em 0;
		}
		.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
			margin-left: 0.5em;
		}
		.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
			margin-left: 0;
		}
		.ui-carousel.custom-carousel .ui-carousel-dot-icon {
			width: 16px !important;
			height: 16px !important;
			border-radius: 50%;
		}
		.ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {
			margin-left: 0.6em;
		}
    `],
    encapsulation: ViewEncapsulation.None
})
export class SampleDemoComponent implements OnInit {

    country: any;

    filteredCountries: any[];

    cities1: SelectItem[];

    cities2: SelectItem[];

    selectedCity1: any;

    selectedCity2: any;

    radioValue: string;

    checkboxValues: string[] = [];

    splitButtonItems: MenuItem[];

    carOptions: SelectItem[];

    selectedMultiSelectCars: string[] = [];

    types: SelectItem[];

    dialogVisible: boolean;

    cars: Car[];

    cols: any[];

    carsLarge: Car[];

    selectedCar3: Car;

    filesTree: TreeNode[];

    menuItems: MenuItem[];

    panelMenuItems: MenuItem[];

    sourceCars: Car[];

    targetCars: Car[];

    orderListCars: Car[];

    carouselCars: Car[];

    responsiveOptions;

    maskValue: string;

    toggleButtonChecked: boolean;

    selectedType: string;

    constructor(private carService: CarService, private countryService: CountryService, private nodeService: NodeService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.carService.getCarsLarge().then(cars => this.carsLarge = cars);
        this.nodeService.getFiles().then(files => this.filesTree = files);
        this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
        this.targetCars = [];
        this.carService.getCarsSmall().then(cars => this.orderListCars = cars);

        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

        this.cities2 = this.cities1.slice(1, 6);

        this.splitButtonItems = [
            { label: 'Update', icon: 'pi pi-fw pi-refresh' },
            { label: 'Delete', icon: 'pi pi-fw pi-times' },
            { label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://www.primefaces.org/primeng' }
        ];

        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'Volkswagen', value: 'Volkswagen' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });

        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });

        this.menuItems = [{
            label: 'File',
            items: [
                { label: 'New', icon: 'pi pi-fw pi-plus' },
                { label: 'Open', icon: 'pi pi-fw pi-download' }
            ]
        },
        {
            label: 'Edit',
            items: [
                { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
                { label: 'Redo', icon: 'pi pi-fw pi-replay' }
            ]
        }];

        this.panelMenuItems = [
            {
                label: 'Documents',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label: 'Accounts',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Calendar',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            }
        ];

        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
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

    filterCountry(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountries = this.searchCountry(query, countries);
        });
    }

    searchCountry(query, countries: any[]): any[] {
        // in a real application, make a request to a remote url with the query and return filtered results,
        // for demo we filter at client side
        const filtered: any[] = [];
        for (const item of countries) {
            const country = item;
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
}
