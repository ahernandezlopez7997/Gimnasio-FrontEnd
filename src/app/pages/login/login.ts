import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  protected readonly roles = [
    { name: 'Socio', description: 'Accede a tu membresía' },
    { name: 'Recepción', description: 'Gestión de entradas' },
    { name: 'Admin', description: 'Control total' },
  ];
  protected readonly selectedRole = signal<string | null>(null);
  protected readonly notice = signal('');
  readonly demoLogin = output<string>();

  protected selectRole(role: string): void {
    this.selectedRole.set(role);
    this.notice.set('');
  }

  protected enterDemo(): void {
    const role = this.selectedRole();
    if (role) this.demoLogin.emit(role);
  }

  protected showResetMessage(): void {
    this.notice.set('La recuperación de contraseña estará disponible al conectar el backend.');
  }
}
