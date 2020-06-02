import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
// import { AppErrorComponent } from './pages/app.error.component';
// import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
// import { AppLoginComponent } from './pages/app.login.component';
import { HomeComponent } from './staticpages/home.component';
import { PurposeComponent } from './staticpages/purpose.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about/purpose', component: PurposeComponent },
            // { path: '', component: DashboardDemoComponent },
            // { path: 'components/sample', component: SampleDemoComponent },
            // { path: 'components/forms', component: FormsDemoComponent },
            // { path: 'components/data', component: DataDemoComponent },
            // { path: 'components/panels', component: PanelsDemoComponent },
            // { path: 'components/overlays', component: OverlaysDemoComponent },
            // { path: 'components/menus', component: MenusDemoComponent },
            // { path: 'components/messages', component: MessagesDemoComponent },
            // { path: 'components/misc', component: MiscDemoComponent },
            // { path: 'pages/empty', component: EmptyDemoComponent },
            // { path: 'components/charts', component: ChartsDemoComponent },
            // { path: 'components/file', component: FileDemoComponent },
            // { path: 'documentation', component: DocumentationComponent }
        ]
    },
    //{path: 'error', component: AppErrorComponent},
    //{path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: '404', component: AppNotfoundComponent},
    //{path: 'login', component: AppLoginComponent},
    {path: '**', redirectTo: '/404'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
