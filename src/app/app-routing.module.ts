import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './core/layout/page/page.component';
import { LayoutModule } from './core/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'submodule/:name',
        loadChildren: () =>
          import('./administrative/submodule/submodule.module').then((m) => m.SubmoduleModule)
      }
      // Foi feito uma rota genérica para todos os submodulos, como não necessariamente há
      // conteudos dentro de cada submodulo, esse componente serviu apenas para mostrar o titulo
      // pegando da rota o nome dos submodulos.
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
