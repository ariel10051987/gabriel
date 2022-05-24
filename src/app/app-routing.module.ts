import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { PesquisaClienteComponent } from './pesquisa-cliente/pesquisa-cliente.component';
import { HomeComponent } from './home/home.component';
import { GAWPaginaNaoEncontradaComponent } from 'gaw-base-components-prime';
import { EventosCarteiraComponent } from './eventos-carteira/eventos-carteira.component';
import { TituloSerieHistoricaComponent } from './titulo-serie-historica/titulo-serie-historica.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' }
  },
  {
    path: 'pesquisa-cliente',
    component: PesquisaClienteComponent,
    data: { pageTitle: 'Pesquisa de Clientes' }
  },
  {
    path: 'eventos-carteira',
    component: EventosCarteiraComponent,
    data: { pageTitle: 'Eventos de Carteira' }
  },
  {
    path: 'titulo-serie-historica',
    component: TituloSerieHistoricaComponent,
    data: { pageTitle: 'Titulo Serie Historica PU' }
  },
  {
    // Dá match com url vazia e rpctoken que é adicionada automaticamente ao abrir em iframe do GAW - Defeito 1322617
    matcher: gawFallbackMatcher,
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: GAWPaginaNaoEncontradaComponent }
];

function gawFallbackMatcher(
  url: UrlSegment[]
): { consumed: UrlSegment[] } | null {
  const isPathEmptyOrRPCToken =
    url.length === 0 || (url.length === 1 && url[0].path === 'rpctoken');

  return isPathEmptyOrRPCToken ? { consumed: url } : null;
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
