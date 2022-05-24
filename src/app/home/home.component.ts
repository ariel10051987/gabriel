import { Component, OnInit } from '@angular/core';
import { GAWThemeService } from 'gaw-ng-lib';

@Component({
  selector: 'omm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'home';
  darkThemeSelected = false;

  resources = [
    {
      url: 'https://angular.io/tutorial',
      desc: 'Aprenda Angular',
      icon: 'assets/graduate.svg'
    },
    {
      url: 'https://angular.io/cli',
      desc: 'Crie estruturas com Angular CLI',
      icon: 'assets/code.svg'
    },
    {
      url: 'https://primefaces.org/primeng/showcase',
      desc: 'Use componentes PrimeNG',
      icon: 'assets/cubes.svg'
    }
  ];

  constructor(private _themeService: GAWThemeService) {}

  ngOnInit(): void {
    this._themeService.temaSelecionado.subscribe((dark) => {
      this.darkThemeSelected = dark === 'DARK';
      this.resources.forEach((rec) => {
        if (this.darkThemeSelected) {
          rec.icon = rec.icon.replace('.svg', '-white.svg');
        } else {
          rec.icon = rec.icon.replace('-white.svg', '.svg');
        }
      });
    });
  }
}
