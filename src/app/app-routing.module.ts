import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatwasComponent } from './tatwas/tatwas.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'tatwas', component: TatwasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
