import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export  class PacienteDrawer {
    private _drawerState = new BehaviorSubject<void>(null);

    get drawerState() {
        return this._drawerState.asObservable();
    }

    AbrirDrawer() {
        this._drawerState.next(null);
    }
}
