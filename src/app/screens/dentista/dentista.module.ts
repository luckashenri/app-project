import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DentistaComponent } from './dentista.component';
import { DentistaRoutingModule } from './dentista-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaFormComponent } from './agenda/agenda-form/agenda-form.component';
import { AtestadoComponent } from './atestado/atestado.component';
import { AtestadoFormComponent } from './atestado/atestado-form/atestado-form.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AgendaService } from './agenda/agenda.service';

@NgModule({
  declarations: [DentistaComponent, AgendaComponent, AgendaFormComponent, AtestadoComponent, AtestadoFormComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    DentistaRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AgendaService]
})
export class DentistaModule { }
