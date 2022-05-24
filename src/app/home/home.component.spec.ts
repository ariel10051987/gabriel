import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { BehaviorSubject } from 'rxjs';
import { GAWThemeService, TipoTema } from 'gaw-ng-lib';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const themeServiceMock = jasmine.createSpyObj<GAWThemeService>(
    'GAWThemeService',
    [],
    {
      temaSelecionado: new BehaviorSubject<TipoTema>('DLS_BASE')
    }
  );

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      providers: [{ provide: GAWThemeService, useValue: themeServiceMock }],
      imports: [PanelModule, ButtonModule, NoopAnimationsModule],
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it("deve trocar o tema da aplicação quando 'darkThemeSelected' mudar", () => {
    themeServiceMock.temaSelecionado.next('DARK');
    fixture.detectChanges();
    expect(component.darkThemeSelected).toBeTrue();
  });
});
