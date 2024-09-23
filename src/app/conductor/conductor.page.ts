import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {
  conductor = {
    costo: 0,
    capacidad: 0,
    viajesAgendados: []
  };
  constructor() { }

  ngOnInit() {
  }

}
