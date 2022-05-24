import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  Router,
  RoutesRecognized
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DropdownModule } from 'primeng/dropdown';
import { Subject } from 'rxjs';
import { LayoutComponent } from './layout.component';

class RouterMock {
  events = new Subject<RoutesRecognized>();
}

class RootSnapshot extends ActivatedRouteSnapshot {
  private _firstChild = new ActivatedRouteSnapshot();

  public get firstChild() {
    return this._firstChild;
  }

  public set firstChild(data) {
    this._firstChild = data;
  }

  constructor() {
    super();
    this._firstChild.data = { pageTitle: 'Unit test' };
  }
}

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  const routerMock = new RouterMock();

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [RouterTestingModule, FormsModule, DropdownModule],
      providers: [{ provide: Router, useValue: routerMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve mudar o título com a navegação', () => {
    const routeEvent = new RoutesRecognized(0, '', '', {
      root: new RootSnapshot(),
      url: ''
    });
    routerMock.events.next(routeEvent);

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.p-ml-2'))
      .nativeElement as { textContent: string };
    expect(element.textContent).toBe(' Você está na Unit test ');
  });

  it('Não deve mudar o título sem navegação', () => {
    routerMock.events.next(null as unknown as RoutesRecognized);

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.p-ml-2'))
      .nativeElement as { textContent: string };
    expect(element.textContent).toBe(' Você está na  ');
  });

  it('Não deve mudar o título sem navegação', () => {
    const rootSnapshot = new RootSnapshot();

    rootSnapshot.firstChild = null as unknown as ActivatedRouteSnapshot;

    const routeEvent = new RoutesRecognized(0, '', '', {
      root: rootSnapshot,
      url: ''
    });
    routerMock.events.next(routeEvent);

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.p-ml-2'))
      .nativeElement as { textContent: string };
    expect(element.textContent).toBe(' Você está na  ');
  });

  it('Não deve mudar o título sem navegação', () => {
    const rootSnapshot = new RootSnapshot();

    rootSnapshot.firstChild.data = null as unknown as ActivatedRouteSnapshot;

    const routeEvent = new RoutesRecognized(0, '', '', {
      root: rootSnapshot,
      url: ''
    });
    routerMock.events.next(routeEvent);

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.p-ml-2'))
      .nativeElement as { textContent: string };
    expect(element.textContent).toBe(' Você está na  ');
  });

  it('Não deve mudar o título sem navegação', () => {
    const rootSnapshot = new RootSnapshot();

    rootSnapshot.firstChild.data = { pageTitle: null };

    const routeEvent = new RoutesRecognized(0, '', '', {
      root: rootSnapshot,
      url: ''
    });
    routerMock.events.next(routeEvent);

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.p-ml-2'))
      .nativeElement as { textContent: string };
    expect(element.textContent).toBe(' Você está na  ');
  });
});
