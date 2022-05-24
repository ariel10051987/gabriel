import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITituloSerieHistorica {
  listaOcorrenciaProcessamento: ITituloSerieHistoricaLista[];
}

export interface ITituloSerieHistoricaLista {
  codigoEstadoPu: string;
  codigoInstrumentoFinanceiro: string;
  codigoTipoPu: string;
  codigoTitulo: string;
  codigoTituloSistemaCustodia: string;
  codigoUsuarioInclusao: string;
  codigoUsuarioLiberacao: string;
  dataVencimentoTitulo: string;
  textoEstadoPu: string;
  textoInstrumentoFinanceiro: string;
  textoTipoPu: string;
  valorFatorAcumuladoIndexador: string;
  valorPu: string;
}

@Injectable({
  providedIn: 'root'
})
export class TituloSerieHistoricaService {
  constructor(private http: HttpClient) {}

  pesquisa(): Observable<ITituloSerieHistorica> {
    return this.http.post<ITituloSerieHistorica>(
      `/iib-cyborg-api/v3/api/op2151757v1/1.1.0`,
      {
        codigoEstadoPuOpcional: 0,
        codigoTituloOpcional: 0,
        dataPuObrigatorio: '05.04.2022',
        dataVencimentoTituloOpcional: '',
        codigoTituloSistemaCustodiaOpcional: ''
      }
    );
  }
}
