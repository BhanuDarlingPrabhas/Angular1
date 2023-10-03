import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';


const routes :Routes = [
  {path:'', component:FirstComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path : 'third', component: ThirdComponent},
  {path : 'fourth/:id', component: FourthComponent},
  {path : 'fifth', component : FifthComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
