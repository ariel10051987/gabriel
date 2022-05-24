import { Component, ViewChild } from '@angular/core';
import {
  BbTableDataSource,
  BbPaginatorComponent,
  BbSortDirective,
  BbSortable
} from 'dls-angular';
import { Router } from '@angular/router';
import { GAWHubClientService } from 'gaw-ng-lib';
import { TituloSerieHistoricaService } from './titulo-serie-historica.service';

@Component({
  selector: 'omm-titulo-serie-historica',
  templateUrl: './titulo-serie-historica.component.html',
  styleUrls: ['./titulo-serie-historica.component.scss']
})
export class TituloSerieHistoricaComponent {
  colunas: string[] = [
    'codigoTitulo',
    'textoInstrumentoFinanceiro',
    'codigoTituloSistemaCustodia',
    'dataVencimentoTitulo',
    'valorPu',
    'dataPu',
    'textoTipoPu',
    'textoEstadoPu',
    'acao'
  ];

  dataSource = new BbTableDataSource<any>();
  dataPu = '05/04/2022';

  @ViewChild(BbSortDirective, {
    static: false
  })
  sort!: BbSortDirective;

  @ViewChild(BbPaginatorComponent, {
    static: false
  })
  paginator!: BbPaginatorComponent;

  filtro = '';
  itensEncontrados!: number;

  constructor(
    private router: Router,
    private gawHubClient: GAWHubClientService,
    private service: TituloSerieHistoricaService
  ) {
    this.getPesquisa();
  }

  getPesquisa() {
    this.service.pesquisa().subscribe((r) => {
      this.dataSource = new BbTableDataSource<any>(
        r.listaOcorrenciaProcessamento
      );
    });
  }

  limpar(): void {
    this.dataSource.filter = '';
    this.filtro = '';
    this.filteredDataLength();
  }

  filteredDataLength(): void {
    this.itensEncontrados = this.dataSource.filteredData.length;
  }

  onPageChange(event: any): void {
    console.log(event);
  }

  defaultSortData(): void {
    this.dataSource.sort = this.sort;
    this.sort.defaultSortData();
  }
}
