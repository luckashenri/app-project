import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaFormComponent } from './agenda/agenda-form/agenda-form.component';
import { DentistaComponent } from './dentista.component';
import { AtestadoComponent } from './atestado/atestado.component';

const routes: Routes = [
    { path: "", redirectTo: "dentista", pathMatch: "full" },
    { path: "dentista", component: DentistaComponent, children: [
      {
        path: '', redirectTo: 'agenda', pathMatch: "full"
      },
      {
        path: 'agenda', component: AgendaComponent
      },
      {
        path: 'atestado', component: AtestadoComponent
      }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DentistaRoutingModule { }
