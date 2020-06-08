import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMainComponent } from './app.main.component';
import { AppMenuComponent } from './app.menu.component';
import { MenuService } from './app.menu.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppRoutes } from './app.routes';
import { AppTopBarComponent } from './app.topbar.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { HomeComponent } from './staticpages/home.component';
import { PurposeComponent } from './staticpages/purpose.component';

@NgModule({
    imports: [
        // BrowserModule,
        // FormsModule,
        // AppRoutes,
        // HttpClientModule,
        // BrowserAnimationsModule,
        // AccordionModule,
        // AutoCompleteModule,
        // BreadcrumbModule,
        // ButtonModule,
        // CalendarModule,
        // CardModule,
        // CarouselModule,
        // ChartModule,
        // CheckboxModule,
        // ChipsModule,
        // CodeHighlighterModule,
        // ConfirmDialogModule,
        // ColorPickerModule,
        // ContextMenuModule,
        // DataViewModule,
        // DialogModule,
        // DropdownModule,
        // EditorModule,
        // FieldsetModule,
        // FileUploadModule,
        // FullCalendarModule,
        // GalleriaModule,
        // InplaceModule,
        // InputMaskModule,
        // InputSwitchModule,
        // InputTextModule,
        // InputTextareaModule,
        // LightboxModule,
        // ListboxModule,
        // MegaMenuModule,
        // MenuModule,
        // MenubarModule,
        // MessageModule,
        // MessagesModule,
        // MultiSelectModule,
        // OrderListModule,
        // OrganizationChartModule,
        // OverlayPanelModule,
        // PaginatorModule,
        // PanelModule,
        // PanelMenuModule,
        // PasswordModule,
        // PickListModule,
        // ProgressBarModule,
        // RadioButtonModule,
        // RatingModule,
        // ScrollPanelModule,
        // SelectButtonModule,
        // SlideMenuModule,
        // SliderModule,
        // SpinnerModule,
        // SplitButtonModule,
        // StepsModule,
        // TableModule,
        // TabMenuModule,
         TabViewModule,
        // TerminalModule,
        // TieredMenuModule,
        // ToastModule,
        // ToggleButtonModule,
        // ToolbarModule,
        // TooltipModule,
        // TreeModule,
        // TreeTableModule,
        // VirtualScrollerModule

        BrowserModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        CarouselModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        MenuModule,
        MenubarModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppNotfoundComponent,
        HomeComponent,
        PurposeComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }, MenuService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
