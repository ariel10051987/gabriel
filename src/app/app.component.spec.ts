import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { GAWTemplateBaseModule } from 'gaw-base-components-prime';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        GAWTemplateBaseModule,
        FormsModule,
        DropdownModule
      ],
      declarations: [AppComponent, LayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
