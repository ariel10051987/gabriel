import { TestBed } from '@angular/core/testing';
import { PesquisaClienteService } from './pesquisa-cliente.service';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

const mock = {
  status: 'OK',
  messages: [],
  data: {
    lista: [
      {
        dataNascimentoConst: '01.01.2005',
        tipoPessoa: 1,
        codigoMCI: 706126957,
        nomeCliente: 'MARIA',
        cpfcnpj: 70050
      },
      {
        dataNascimentoConst: '18.06.1957',
        tipoPessoa: 1,
        codigoMCI: 690492753,
        nomeCliente: 'MARIA  DAS GRACAS MOURA LOPES',
        cpfcnpj: 0
      }
    ],
    completa: false
  },
  statusCode: 200
};

describe('PesquisaClienteService', () => {
  let pesquisaClienteService: PesquisaClienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PesquisaClienteService]
    });
    pesquisaClienteService = TestBed.inject(PesquisaClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser criado', () => {
    expect(pesquisaClienteService).toBeTruthy();
  });

  it('deve listar os clientes', () => {
    pesquisaClienteService.pesquisarPorNome('maria').subscribe((data) => {
      expect(data.data.lista[1].nomeCliente).toBe(
        'MARIA  DAS GRACAS MOURA LOPES'
      );
    });

    const req = httpMock.expectOne(
      `/gaw-aplic-api/v3/api/v2/pesquisa-clientes?nome=maria`,
      'Pesquisa por Nome'
    );
    expect(req.request.method).toBe('GET');

    req.flush(mock);

    httpMock.verify();
  });
});
