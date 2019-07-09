import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AgendaService } from './agenda.service';


@Component({
  selector: 'ns-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  moduleId: module.id,
})
export class AgendaComponent implements OnInit {
  public agenda = [
    {
      titulo: 'dsajdasjkdasj k',
      descricao: 'asdkjld ajskld jaskljdklasj dlkasbdklash dklashk dahsç fa',
      data: '12/12/1221'
    },
    {
      titulo: 'dsajdasjkdasj k',
      descricao: 'asdkjld ajskld jaskljdklasj dlkasbdklash dklashk dahsç fa',
      data: '12/12/1221'
    },
    {
      titulo: 'dsajdasjkdasj k',
      descricao: 'asdkjld ajskld jaskljdklasj dlkasbdklash dklashk dahsç fa',
      data: '12/12/1221'
    }
  ];

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    // this.agendaService.getAgenda().subscribe((res) => {
    //   this.agenda = res;
    // });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onNavBtnTap() {
    console.log('sei la');
  }
 
}
