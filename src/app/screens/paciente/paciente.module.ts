import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PacienteComponent } from './paciente.component';
import { AtestadoComponent } from './atestado/atestado.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
  declarations: [PacienteComponent, AtestadoComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    PacienteRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PacienteModule { }
