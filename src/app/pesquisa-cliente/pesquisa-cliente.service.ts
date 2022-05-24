import { Injectable } from '@angular/core';
import { IResponse } from 'gaw-ng-lib';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICliente {
  dataNascimentoConst: string;
  tipoPessoa: number;
  codigoMCI: number;
  nomeCliente: string;
  cpfcnpj: number;
}

@Injectable({
  providedIn: 'root'
})
export class PesquisaClienteService {
  constructor(private http: HttpClient) {}

  pesquisarPorNome(
    nome: string
  ): Observable<IResponse<{ lista: ICliente[]; completa: boolean }>> {
    return this.http.get<IResponse<{ lista: ICliente[]; completa: boolean }>>(
      `/gaw-aplic-api/v3/api/v2/pesquisa-clientes?nome=${nome}`
    );
  }
}
