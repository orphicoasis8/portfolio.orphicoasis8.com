import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoshopComponent } from './photoshop/photoshop.component';

const routes: Routes = [{ path: 'photoshop', component: PhotoshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoshopRoutingModule {}
