import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbidsComponent } from './viewbids/viewbids.component';

const routes: Routes = [
  { path: 'bids', component: ViewbidsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
