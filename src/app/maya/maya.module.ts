import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayaRoutingModule } from './maya-routing.module';
import { MayaComponent } from './maya/maya.component';

@NgModule({
  imports: [
    CommonModule,
    MayaRoutingModule
  ],
  declarations: [MayaComponent]
})
export class MayaModule { }
