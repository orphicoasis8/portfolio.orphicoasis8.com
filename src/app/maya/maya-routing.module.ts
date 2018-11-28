import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayaComponent } from './maya/maya.component';

const routes: Routes = [{ path: 'maya', component: MayaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayaRoutingModule {}
