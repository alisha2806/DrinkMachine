import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LemonComponent } from './lemon/lemon.component';
import { FirstDisplayComponent } from './first-display/first-display.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ChocolateComponent } from './chocolate/chocolate.component';


const routes: Routes = [
  { path: 'first-display', component: FirstDisplayComponent },
  { path: 'lemon', component: LemonComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'chocolate', component: ChocolateComponent },
  { path: '', component: FirstDisplayComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
