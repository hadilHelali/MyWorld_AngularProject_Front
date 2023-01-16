import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {ChartModule} from 'primeng/chart';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";

import { PagesModule } from "./pages/pages.module";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { AuthentificationComponent } from './authentification/authentification.component';
import { BrowserModule } from "@angular/platform-browser";
import { AuthInterceptor, authInterceptorProviders } from "./authentification/services/auth.interceptor";
import { TokenStorageService } from "./authentification/services/token-storage.service";
import { AuthService } from "./authentification/services/auth.services";
import { AuthModule } from "./authentification/auth.module";
import { AdministrationComponent } from './administration/administration.component';
import { DashbordcomponementComponent } from './administration/dashbordcomponement/dashbordcomponement.component';
import { AdminProfilecomponementComponent } from './administration/admin-profilecomponement/admin-profilecomponement.component';
import { UserListcomponementComponent } from './administration/user-listcomponement/user-listcomponement.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AdministrationComponent,
    DashbordcomponementComponent,
  
    AdminProfilecomponementComponent,
  
    UserListcomponementComponent,
  
    
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    PagesModule,
    ChartModule
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
