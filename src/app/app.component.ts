import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template:`
    <div class="p-2 w-full bg-slate-600 flex gap-2  text-dark">
        <a class="hover:text-sky-200" routerLink="/saisie">Saisie</a>
        <a class="hover:text-sky-200" routerLink="/">Inventory</a>
    </div>
      <router-outlet />
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
