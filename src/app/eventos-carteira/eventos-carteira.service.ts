import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Requisicao {
  dataMensagemEventoCarteiraInicio: string;
  dataMensagemEventoCarteiraFim: string;
  codigoMensagemSistemaCustodia: string;
  codigoTipoEventoCarteira: number;
  numeroOperacaoSistemaCustodia: number;
  numeroContaSelicCedente: number;
  codigoEstadoEventoCarteira: number;
  dataContabilEventoCarteira: string;
  codigoIdentificacaoInstituicaoFinanceiraBancoCentralDoBrasil: string;
  codigoIdentificacaoInstituicaoFinanceiraSistemaPagamentoBrasileiro: string;
  numeroBoleta: number;
  numeroControlePesquisa: number;

  // identificador: string;
  // situacaoCustodia: string;
  // dataContabil: Date;
  // tipoEvento: string;
  // estado: string;
  // valorFinanceiro: number;
  // quantidade: number;
  // acao: string;
}

export interface Resposta {
  indicadorContinuidade: string;
  numeroUltimoRegistroProcessado: number;
  quantidadeRegistro: number;
  listaRegistroProcessamento: [];
}

@Injectable({
  providedIn: 'root'
})
export class RetornaEventosCarteiraService {
  baseUrl = '/iib-cyborg-api/v3/api';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}
  public getBoletas(request: Requisicao): Observable<Resposta> {
    const endPointServer = `${this.baseUrl}/op753757-v2/1.8.0`;

    return this.http.post<Resposta>(endPointServer, request, this.httpOptions);
  }
}
