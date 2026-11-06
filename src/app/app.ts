import { Component, signal } from '@angular/core';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Welcome } from './pages/welcome/welcome';

@Component({
  imports: [Login, Home, Welcome],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly currentRole = signal<string | null>(null);

  protected openDemo(role: string): void {
    this.currentRole.set(role);
  }

  protected closeSession(): void {
    this.currentRole.set(null);
  }
}
