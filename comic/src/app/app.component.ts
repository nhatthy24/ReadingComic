import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comic';

  prepareRoute(myOutlet: RouterOutlet) {
    return myOutlet && myOutlet.activatedRouteData &&
      myOutlet.activatedRouteData['animation'];
  }
}
