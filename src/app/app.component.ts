import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FourthComponent } from './fourth/fourth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'angular latest version';
  user : string = 'Bhanuchander';
  data: any;

  constructor(private router: Router) {  }

  navigateFirst() {
    this.router.navigate(['first'])
  }

  navigateSecond() {
    this.router.navigate(['second'])
  }

  navigateThird() {
    this.router.navigate(['third'])
  }

  navigateFifth() {
    this.router.navigate(['fifth'])
  }
}

