import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AtestadoComponent } from './atestado/atestado.component';

const routes: Routes = [
    { path: "", redirectTo: "atestado", pathMatch: "full" },
    { path: "atestado", component: AtestadoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PacienteRoutingModule { }
