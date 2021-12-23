import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoraComponent } from './pages/autora/autora.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path: "autora", component: AutoraComponent},
  {path: "obras", component: ObrasComponent},
  {path: "novedades", component: NovedadesComponent},
  {path: "blog", component: BlogComponent},
  {path: "contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
