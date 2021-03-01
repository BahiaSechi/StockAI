import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'supervision';
    items: MenuItem[];
    
    constructor (
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: 'home'
            },
            {
                label: 'Trainer',
                icon: 'pi pi-pencil',
                routerLink: 'trainer'
            },
            {
                label: 'Trading strategies',
                icon: 'pi pi-credit-card',
                items: [
                    { label: 'Strat 1', routerLink: 'strategie' },
                    { label: 'Strat 2', routerLink: 'strategie' }
                ]
            }
        ];
    }
}
