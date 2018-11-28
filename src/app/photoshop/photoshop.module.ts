import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoshopRoutingModule } from './photoshop-routing.module';
import { PhotoshopComponent } from './photoshop/photoshop.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoshopRoutingModule
  ],
  declarations: [PhotoshopComponent]
})
export class PhotoshopModule { }
