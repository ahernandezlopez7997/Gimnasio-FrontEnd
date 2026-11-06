import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';
import { Home } from './pages/home/home';
import { Acceso } from './pages/acceso/acceso';
import { Actividades } from './pages/actividades/actividades';
import { Cuotas } from './pages/cuotas/cuotas';
import { Monitores } from './pages/monitores/monitores';
import { Planes } from './pages/planes/planes';

@Component({
  imports: [RouterOutlet, Login, Welcome, Home, Acceso, Actividades, Cuotas, Monitores, Planes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Gimnasio-FrontEnd');
}
