import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly role = input('Socio');
  readonly logout = output<void>();
  protected readonly activePage = signal('Inicio');
  protected readonly today = new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
  protected readonly navigation = computed(() => {
    const pagesByRole: Record<string, { label: string; icon: string }[]> = {
      Socio: [
        { label: 'Inicio', icon: '⌂' },
        { label: 'Mis clases', icon: '▣' },
        { label: 'Horario', icon: '◷' },
        { label: 'Asistencia', icon: '✓' },
        { label: 'Pagos', icon: '▱' },
      ],
      Reception: [
        { label: 'Inicio', icon: '⌂' },
        { label: 'Accesos', icon: '↪' },
        { label: 'Socios', icon: '♙' },
        { label: 'Actividades', icon: '▣' },
        { label: 'Planes', icon: '▤' },
      ],
      Admin: [
        { label: 'Inicio', icon: '⌂' },
        { label: 'Accesos', icon: '↪' },
        { label: 'Actividades', icon: '▣' },
        { label: 'Cuotas', icon: '€' },
        { label: 'Monitores', icon: '♙' },
      ],
    };

    const roleKey = this.role() === 'Recepción' ? 'Reception' : this.role();
    return pagesByRole[roleKey] ?? pagesByRole['Socio'];
  });

  protected selectPage(page: string): void {
    this.activePage.set(page);
  }
}
