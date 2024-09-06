import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ RouterOutlet, HomeComponent],
  providers:[],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
