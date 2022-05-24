// Dependências Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as log from 'loglevel';
// RFC - Configuração da DLS do BB - Início
import {
  BbLayoutModule,
  BbThemeModule,
  BbButtonModule,
  BbCardModule,
  BbIconModule,
  BbTableModule,
  BbMaskModule,
  BbPaginatorModule
} from 'dls-angular';
// RFC - Configuração da DLS do BB - Fim

// Dependências do PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

// Dependências GAW
import {
  GAWHttpInterceptor,
  GAWHubClientService,
  GAWPipesModule,
  IOpenAjaxHubClient
} from 'gaw-ng-lib';

import {
  GAWPaginaNaoEncontradaModule,
  GAWTemplateBaseModule
} from 'gaw-base-components-prime';

// Dependências internas da aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PesquisaClienteComponent } from './pesquisa-cliente/pesquisa-cliente.component';
import { EventosCarteiraComponent } from './eventos-carteira/eventos-carteira.component';
import { TituloSerieHistoricaComponent } from './titulo-serie-historica/titulo-serie-historica.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PesquisaClienteComponent,
    EventosCarteiraComponent,
    TituloSerieHistoricaComponent
  ],
  imports: [
    // Angular
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // RFC - Configuração da DLS do BB - Início
    BbThemeModule.forRoot({ name: 'corporativo' }),
    BbLayoutModule,
    BbButtonModule,
    BbPaginatorModule,
    // RFC - Configuração da DLS do BB - Fim

    // PrimeNG
    ButtonModule,
    CardModule,
    BbCardModule,
    BbIconModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    // TableModule,
    BbTableModule,
    BbMaskModule,
    CalendarModule,

    // Components BB
    // BbTableModule,
    // BbPaginatorModule,

    // GAW
    GAWTemplateBaseModule,
    GAWPaginaNaoEncontradaModule,
    GAWPipesModule
  ],
  providers: [
    // Efetua a conexão com o OpenAjaxHub durante a inicialização da aplicação
    {
      provide: APP_INITIALIZER,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      useFactory: AppModule.initializeApp,
      deps: [GAWHubClientService],
      multi: true
    },

    // Provê tratamentos genéricos de erros como por exemplo falha no login
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GAWHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static initializeApp(
    gawHubClientService: GAWHubClientService
  ): () => Promise<IOpenAjaxHubClient | undefined> {
    return () =>
      // A promessa deve sempre ser resolvida, caso contrário, aplicação não é inicializada
      new Promise((resolve) =>
        gawHubClientService.init().subscribe(
          (hubClient) => resolve(hubClient),
          (err) => {
            log.error(
              `Erro ao inicializar o Hub Clent Service: ${String(err)}`
            );
            resolve(undefined);
          }
        )
      );
  }
}
