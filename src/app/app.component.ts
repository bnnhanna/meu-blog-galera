import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] // Adicione o RouterModule aqui
})
export class AppComponent {
  title = 'meu-blog';
}
