import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { UIService } from './ui.service';
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    private drawerSub: Subscription;
    private drawer: RadSideDrawer

    constructor( private uiService: UIService,
                 private changeDetectionRef: ChangeDetectorRef,
                 private router: RouterExtensions,
                 private vcRef: ViewContainerRef) {}

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
/*         this.uiService.setRootVCRef(this.vcRef); */
    }

    ngAfterViewInit() {
        this.drawer =  this.drawerComponent.sideDrawer;

        this.changeDetectionRef.detectChanges();
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }
/*
    Sair() {
        this.uiService.toogleDrawer();
    }

    Exames() {
        this.uiService.toogleDrawer();
    }

    Atestado() {
        this.uiService.toogleDrawer();
    }

    Agendamento() {
        this.uiService.toogleDrawer();
    }

    Historico() {
        this.uiService.toogleDrawer();
    }

    Receita() {
        this.uiService.toogleDrawer();
    } */

}
