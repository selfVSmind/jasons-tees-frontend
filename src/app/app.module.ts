import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';

// import { GraphicCardComponent } from './create-shirt/graphic-card/graphic-card.component';
// import { DemographicCardComponent } from './create-shirt/demographic-card/demographic-card.component';
// import { SpecificationsCardComponent } from './create-shirt/specifications-card/specifications-card.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { DesignsComponent } from './designs/designs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateShirtComponent } from './create-shirt/create-shirt.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { TShirtBlankCountsChartComponent } from './view-inventory/charts/t-shirt-blank-counts-chart/t-shirt-blank-counts-chart.component';
import { DemographicCardComponent } from './create-shirt/demographic-card/demographic-card.component';
import { GraphicCardComponent } from './create-shirt/graphic-card/graphic-card.component';
import { SpecificationsCardComponent } from './create-shirt/specifications-card/specifications-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    DesignsComponent,
    ProfileComponent,
    CreateShirtComponent,
    ViewInventoryComponent,
    TShirtBlankCountsChartComponent,
    DemographicCardComponent,
    GraphicCardComponent,
    SpecificationsCardComponent,
    // GraphicCardComponent,
    // DemographicCardComponent,
    // SpecificationsCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
