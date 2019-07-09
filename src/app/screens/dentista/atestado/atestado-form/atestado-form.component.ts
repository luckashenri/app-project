import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../agenda/agenda.service';

@Component({
  selector: 'ns-atestado-form',
  templateUrl: './atestado-form.component.html',
  styleUrls: ['./atestado-form.component.css'],
  moduleId: module.id,
})
export class AtestadoFormComponent implements OnInit {

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.agendaService.getAgenda();
  }

}
