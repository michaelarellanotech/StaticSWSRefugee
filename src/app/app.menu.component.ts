import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state('hidden', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visible', style({
                height: '*',
            })),
            state('hiddenAnimated', style({
                height: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuComponent implements OnInit {

    model: any[];

    inlineModel: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {
                label: 'About Us', icon: 'pi pi-fw pi-star', routerLink: ['/components'],
                items: [
                    { label: 'Purpose', icon: 'pi pi-arrow-right', routerLink: ['/']},
                    { label: 'History', icon: 'pi pi-list', routerLink: ['/'] },
                    { label: 'Achievement', icon: 'pi pi-check', routerLink: ['/'] },
                    { label: 'Staff', icon: 'pi pi-users', routerLink: ['/'] },
                    { label: 'Annual Summary', icon: 'pi pi-calendar', routerLink: ['/'],
                        items: [
                            { label: '2016/2017', icon: 'pi pi-calendar-plus', routerLink: ['/'] },
                            { label: '2018/2019', icon: 'pi pi-calendar-plus', routerLink: ['/'] }
                        ]
                    }
                ]
            },
            { label: 'FAQs', icon: 'pi pi-question', routerLink: ['/']},
            { label: 'Asylum Seeker Advocacy & GP Clinics', icon: 'pi pi-heart', routerLink: ['/']}, 
            { label: 'Refugee Health Nurse Program', icon: 'pi pi-plus-circle', routerLink: ['/']}, 
            { label: 'Disability Support Team', icon: 'pi pi-users', routerLink: ['/']}, 
            { label: 'Communications Health Information', icon: 'pi pi-comment', routerLink: ['/']}, 
            { label: 'Education & Training', icon: 'pi pi-pencil', routerLink: ['/']}, 
            { label: 'Projects', icon: 'pi pi-cog', routerLink: ['/']}, 
            { label: 'Resources', icon: 'pi pi-globe', routerLink: ['/']}, 
            { label: 'GP Information', icon: 'pi pi-info-circle', routerLink: ['/']}, 
            { label: 'Refugee Health Networks', icon: 'pi pi-plus-circle', routerLink: ['/']}, 
            { label: 'Placements, Employment, Volunteering', icon: 'pi pi-user-edit', routerLink: ['/']}, 
            { label: 'Links', icon: 'pi pi-share-alt', routerLink: ['/']}, 
            { label: 'Contact Us', icon: 'pi pi-comments', routerLink: ['/']}, 
            // { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            // {
            //     label: 'Components', icon: 'pi pi-fw pi-star', routerLink: ['/components'],
            //     items: [
            //         { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', routerLink: ['/components/sample']},
            //         { label: 'Forms', icon: 'pi pi-fw pi-file', routerLink: ['/components/forms'] },
            //         { label: 'Data', icon: 'pi pi-fw pi-table', routerLink: ['/components/data'] },
            //         { label: 'Panels', icon: 'pi pi-fw pi-list', routerLink: ['/components/panels'] },
            //         { label: 'Overlays', icon: 'pi pi-fw pi-clone', routerLink: ['/components/overlays'] },
            //         { label: 'Menus', icon: 'pi pi-fw pi-plus', routerLink: ['/components/menus'] },
            //         { label: 'Messages', icon: 'pi pi-fw pi-envelope', routerLink: ['/components/messages'] },
            //         { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/components/charts'] },
            //         { label: 'File', icon: 'pi pi-fw pi-upload', routerLink: ['/components/file'] },
            //         { label: 'Misc', icon: 'pi pi-fw pi-spinner', routerLink: ['/components/misc'] }
            //     ]
            // },
            // {
            //     label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],
            //     items: [
            //         { label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] },
            //         { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank' },
            //         { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
            //         { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' },
            //         { label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/404'], target: '_blank' },
            //         {
            //             label: 'Access Denied', icon: 'pi pi-fw pi-ban',
            //             routerLink: ['/accessdenied'], target: '_blank'
            //         }
            //     ]
            // },
            // {
            //     label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Docs', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
            // },
            // {
            //     label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
            // }
        ];
        this.inlineModel = [
            {
                label: 'Profile', icon: 'pi pi-fw pi-user'
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Messages', icon: 'pi pi-fw pi-envelope'
            },
            {
                label: 'Notifications', icon: 'pi pi-fw pi-bell'
            }
        ];
    }

    onMenuClick(event) {
        this.app.onMenuClick(event);
    }
}
