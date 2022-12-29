import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormModalComponent } from './form-modal/form-modal.component';

import { ModalModule } from '@rogers/cdk/modal';
import { ButtonModule } from '@rogers/cdk/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModule as CoreFormModule } from '@rogers/cdk/form';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormLeadGenModule } from '@rogers/cdk/assembled/form-lead-gen';

import { TabsModule } from '@rogers/cdk/tabs';
import { TileModule } from '@rogers/cdk/tile';
import { IconModule } from '@rogers/cdk/icon';


import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PictureModule } from '@rogers/cdk/picture';
import { ExpanderModule } from '@rogers/cdk/expander';
import { CarouselModule } from '@rogers/cdk/carousel';
import { LinkModule } from '@rogers/cdk/link';
import { BillboardModule } from '@rogers/cdk/assembled/billboard';
import { PopoverModule } from '@rogers/cdk/popover';
import { ElasticTileModule } from '@rogers/cdk/assembled/elastic-tile';
import { LayoutModule } from '@rogers/cdk/assembled/layout';
import { VideoModule } from '@rogers/cdk/video';
import { AlertModule } from '@rogers/cdk/assembled/alert';
import { LabelModule } from '@rogers/cdk/label';
import { ParallaxModule } from '@rogers/cdk/assembled/parallax';
import { FooterModule } from '@rogers/cdk/assembled/footer';
import { PrintModule } from '@rogers/cdk/print';
import { CDKCoreModule } from '@rogers/cdk/core';
import { InfoModule } from '@rogers/cdk/assembled/info';
import { DetailsComponent } from './details/details.component';
import { ValuesComponent } from './values/values.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DetailsComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    LinkModule,
    TileModule,
    AppRoutingModule,
    ModalModule,
    ButtonModule,
    PopoverModule,
    FormsModule,
    ExpanderModule,
    BrowserAnimationsModule,
    CoreFormModule,
    ReactiveFormsModule,
    TabsModule,
    IconModule,
    CDKCoreModule.forRoot({

  brand: 'rogers', // rogers | fido | chatr | r4b

}),
    PictureModule,
    FormLeadGenModule,
    CarouselModule,
    BillboardModule,
    CommonModule,
    ElasticTileModule,
    LayoutModule ,
    VideoModule,
    AlertModule,
    LabelModule,
    ParallaxModule,
    FooterModule,
    PrintModule,
    InfoModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
