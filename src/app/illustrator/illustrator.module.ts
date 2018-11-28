import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IllustratorRoutingModule } from './illustrator-routing.module';
import { IllustratorComponent } from './illustrator/illustrator.component';

@NgModule({
  imports: [CommonModule, IllustratorRoutingModule, HttpClientModule],
  declarations: [IllustratorComponent],
})
export class IllustratorModule {}
