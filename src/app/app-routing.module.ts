import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateShirtComponent } from './create-shirt/create-shirt.component';
import { DesignsComponent } from './designs/designs.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';

const routes: Routes = [
  { path: 'create', component: CreateShirtComponent },
  { path: 'inventory', component: ViewInventoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: ProfileComponent },
  { path: 'designs', component: DesignsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
