import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'omm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        if (route) {
          const data = route.data as { pageTitle: string };
          if (data) {
            this.pageTitle = data.pageTitle ? data.pageTitle : '';
          }
        }
      }
    });
  }
}
