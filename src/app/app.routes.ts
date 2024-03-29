import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./inventory/inventory.component').then(c => c.InventoryComponent)
}, {
    path: 'saisie/:index',
    loadComponent: () => import('./saisie/saisie.component').then(c => c.SaisieComponent)
}, {
    path: 'saisie',
    loadComponent: () => import('./saisie/saisie.component').then(c => c.SaisieComponent)
}];
