import { Component } from '@angular/core';

import { NgxElectronService } from './ngx-electron/ngx-electron.service';

@Component({
    selector: 'seed-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(
        private electron: NgxElectronService
    ) {
        electron.send("Hello");
    }
}


