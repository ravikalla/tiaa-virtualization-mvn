import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TiaavirtualizationSharedModule } from 'app/shared/shared.module';
import { TiaavirtualizationCoreModule } from 'app/core/core.module';
import { TiaavirtualizationAppRoutingModule } from './app-routing.module';
import { TiaavirtualizationHomeModule } from './home/home.module';
import { TiaavirtualizationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TiaavirtualizationSharedModule,
    TiaavirtualizationCoreModule,
    TiaavirtualizationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TiaavirtualizationEntityModule,
    TiaavirtualizationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TiaavirtualizationAppModule {}
