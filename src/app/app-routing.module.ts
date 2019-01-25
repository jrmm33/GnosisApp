import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatwasComponent } from './tatwas/tatwas.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'tatwas', component: TatwasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}