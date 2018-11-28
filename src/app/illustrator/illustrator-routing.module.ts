import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IllustratorComponent } from './illustrator/illustrator.component';

const routes: Routes = [{ path: 'illustrator', component: IllustratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IllustratorRoutingModule {}
