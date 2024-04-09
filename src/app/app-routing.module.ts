import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './core/layout/page/page.component';
import { LayoutModule } from './core/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
