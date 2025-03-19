import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router'; // Importe o RouterOutlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NavbarComponent, RouterOutlet] // Adicione RouterOutlet
})
export class AppComponent { }
