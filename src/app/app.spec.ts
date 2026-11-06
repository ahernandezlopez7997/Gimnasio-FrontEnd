import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the login and enter the selected demo role', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#login-title')?.textContent).toContain('Bienvenido');

    const roleButton = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.role-card')).find(
      (button) => button.textContent?.includes('Socio'),
    );
    expect(roleButton).toBeTruthy();
    roleButton?.click();
    await fixture.whenStable();
    compiled.querySelector<HTMLButtonElement>('.demo-submit')?.click();
    await fixture.whenStable();

    expect(compiled.querySelector('.workspace')).toBeTruthy();
    expect(compiled.querySelector('.profile-copy small')?.textContent).toContain('Socio');
  });
});
