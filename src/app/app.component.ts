import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email:string='abc@gmail.com';
  
  isChecked:boolean = false;

  gender:string = 'Male';

  sliderVal:number = 5;

  tech:string = 'angular';
}
