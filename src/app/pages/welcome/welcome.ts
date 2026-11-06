import { Component } from '@angular/core';
import { Login } from '../login/login';

@Component({
  imports: [Login],
  selector: 'app-welcome',
  styleUrl: './welcome.css',
  templateUrl: './welcome.html',
})
export class Welcome {}
