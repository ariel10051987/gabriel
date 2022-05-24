import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GAWHubClientService } from 'gaw-ng-lib';
import { PesquisaClienteService, ICliente } from './pesquisa-cliente.service';

@Component({
  selector: 'omm-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.scss']
})
export class PesquisaClienteComponent {
  constructor(
    private router: Router,
    private gawHubClient: GAWHubClientService,
    private pesquisaClienteService: PesquisaClienteService
  ) {}

  @ViewChild('pesquisaForm') pesquisaForm: NgForm | undefined;

  nome = '';
  dataSource: ICliente[] = [];

  pesquisar(): void {
    this.pesquisaClienteService
      .pesquisarPorNome(this.nome)
      .subscribe((resp) => (this.dataSource = resp.data.lista));
  }

  voltar(): void {
    void this.router.navigate(['/home']);
  }

  contextualizar(event: { data: ICliente }): void {
    const cliente = event.data;
    this.gawHubClient.contextualizarClientePorMCI(cliente.codigoMCI, true);
  }
}
