import { Component } from '@angular/core';
import { OMM_CONSTANTES } from '../constantes';
import {
  Requisicao,
  RetornaEventosCarteiraService
} from './eventos-carteira.service';

@Component({
  selector: 'omm-eventos-carteira',
  templateUrl: './eventos-carteira.component.html',
  styleUrls: ['./eventos-carteira.component.scss']
})
export class EventosCarteiraComponent {
  readonly configCalendarioPtbr = OMM_CONSTANTES.CALENDARIO.CONFIG;
  constructor(
    private retornaEventosCarteiraService: RetornaEventosCarteiraService
  ) {}
  form = {
    data: new Date()
  };

  pesquisar(): void {
    const requisicaoEventos = {} as Requisicao;
    requisicaoEventos.dataMensagemEventoCarteiraInicio = '12.02.2021';
    requisicaoEventos.dataMensagemEventoCarteiraFim = '12.02.2021';
    requisicaoEventos.codigoMensagemSistemaCustodia = 'SEL1611';
    requisicaoEventos.codigoTipoEventoCarteira = 0;
    requisicaoEventos.codigoEstadoEventoCarteira = 2;
    this.retornaEventosCarteiraService
      .getBoletas(requisicaoEventos)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }
}
