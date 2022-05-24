/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Location } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GAWHubClientService, GAWPipesModule, IResponse } from 'gaw-ng-lib';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { noop, Observable, of } from 'rxjs';
import { PesquisaClienteComponent } from './pesquisa-cliente.component';
import { ICliente, PesquisaClienteService } from './pesquisa-cliente.service';

(window as any).OpenAjax = {
  hub: { IframeHubClient: noop }
};

const mockRespostaPesquisaCliente: any = {
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

describe('PesquisaClienteComponent', () => {
  let pesquisaClienteServiceStub: Partial<PesquisaClienteService>;
  let gawHubClientServiceStub: Partial<GAWHubClientService>;
  let pesquisaClienteComponent: PesquisaClienteComponent;
  let fixture: ComponentFixture<PesquisaClienteComponent>;
  let location: Location;
  const routerMock = jasmine.createSpyObj<Router>('Router', ['navigate']);

  beforeEach(waitForAsync(() => {
    pesquisaClienteServiceStub = {
      pesquisarPorNome: (): Observable<
        IResponse<{ lista: ICliente[]; completa: boolean }>
      > => {
        return of(mockRespostaPesquisaCliente);
      }
    };

    gawHubClientServiceStub = {
      contextualizarClientePorMCI: noop
    };

    TestBed.configureTestingModule({
      declarations: [PesquisaClienteComponent],
      providers: [
        PesquisaClienteComponent,
        {
          provide: PesquisaClienteService,
          useValue: pesquisaClienteServiceStub
        },
        PesquisaClienteComponent,
        {
          provide: GAWHubClientService,
          useValue: gawHubClientServiceStub
        },
        {
          provide: Router,
          useValue: routerMock
        }
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        NoopAnimationsModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        PanelModule,
        GAWPipesModule
      ]
    });

    fixture = TestBed.createComponent(PesquisaClienteComponent);
    location = TestBed.inject(Location);
    pesquisaClienteComponent = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deve ser criado', () => {
    expect(pesquisaClienteComponent).toBeTruthy();
  });

  it('deve receber o input do nome', () => {
    const inputNomeEl = fixture.debugElement.query(
      By.css('#nome')
    ).nativeElement;
    inputNomeEl.value = 'maria';
    inputNomeEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(pesquisaClienteComponent.nome).toBe('maria');
  });

  it('deve apresentar os resultados ao pesquisar', () => {
    const inputNomeEl = fixture.debugElement.query(
      By.css('#nome')
    ).nativeElement;
    inputNomeEl.value = 'maria';

    const formEl = fixture.debugElement.query(By.css('#form')).nativeElement;
    formEl.dispatchEvent(new Event('ngSubmit'));

    fixture.detectChanges();

    const resultados = fixture.debugElement.query(By.css('#resultados'));

    expect(resultados).toBeDefined();
  });

  it('deve voltar ao clicar no botão voltar', () => {
    const botaoVoltar = fixture.debugElement.query(
      By.css('.p-button-raised')
    ).nativeElement;

    botaoVoltar.click();

    fixture.detectChanges();

    expect(location.path()).toBe('');
  });

  it('deve contextualizar um cliente', () => {
    pesquisaClienteComponent.contextualizar({
      data: {
        codigoMCI: 123,
        cpfcnpj: 123,
        dataNascimentoConst: '01/01/2000',
        nomeCliente: 'Maria',
        tipoPessoa: 1
      }
    });

    fixture.detectChanges();

    expect(location.path()).toBe('');
  });
});
