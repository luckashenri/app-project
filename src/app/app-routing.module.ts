import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./screens/login/login.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: "paciente", loadChildren: "~/app/screens/paciente/paciente.module#PacienteModule" },
    { path: "dentista", loadChildren: "~/app/screens/dentista/dentista.module#DentistaModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }



