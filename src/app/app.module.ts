import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// electron
import { NgxElectronModule } from './ngx-electron/ngx-electron.module';
// app
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxElectronModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
