import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/';
import {PacienteDrawer} from './pacienteDrawer.service';
import { Subscription } from 'rxjs';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

@Component({
  selector: 'ns-patient-tab',
  templateUrl: './patient-tab.component.html',
  styleUrls: ['./patient-tab.component.css'],
  moduleId: module.id,
})
export class PatientTabComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
  constructor( private pacienteService: PacienteDrawer, private router: RouterExtensions,   private changeDetectionRef: ChangeDetectorRef, private active: ActivatedRoute, private page: Page, ) { }

  ngOnInit() {
    this.drawerSub = this.pacienteService.drawerState.subscribe(() => {
        if (this.drawer) {
           this.drawer.toggleDrawerState();
        }
        });

    this.router.navigate(
        [
            {
                outlets: {receita: ['ns-prescription'], agendamento: ['ns-schedule'], historico: ['ns-history']}
            }
        ],
        {
            relativeTo: this.active
        }
        );
        this.page.actionBarHidden = true;
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

        Quit() {
            this.pacienteService.AbrirDrawer();
            }

         Exames() {
            this.pacienteService.AbrirDrawer();
            }

        Atestado() {
            this.pacienteService.AbrirDrawer();
            }

        Agendamento() {
            this.pacienteService.AbrirDrawer();
            }

         Historico() {
            this.pacienteService.AbrirDrawer();
            }

        Receita() {
            this.pacienteService.AbrirDrawer();
            }




}


/* constructor( private uiService: UIService,
    private changeDetectionRef: ChangeDetectorRef,
    private router: RouterExtensions,
    private vcRef: ViewContainerRef) {}

ngOnInit() {
this.drawerSub = this.uiService.drawerState.subscribe(() => {
if (this.drawer) {
   this.drawer.toggleDrawerState();
}
});
        this.uiService.setRootVCRef(this.vcRef);
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
}

}
 */
