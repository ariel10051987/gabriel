import { Component } from '@angular/core';
import * as log from 'loglevel';

const TAG = 'AppComponent';

@Component({
  selector: 'omm-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    log.debug(TAG, 'Iniciando AppComponent');
  }
}
