import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  typeAuto: any[] = [
    { id: 'Volkswagen', name: 'Volkswagen' },
    { id: 'Ferrari', name: 'Ferrari' },
    { id: 'Pagani', name: 'Pagani' },
    { id: 'Porsche', name: 'Porsche' }
  ];
  modelAuto: any[] = [
    { id: 'Descapotable', name: 'Descapotable' },
    { id: 'Sedán', name: 'Sedán' },
    { id: 'Convertible', name: 'Convertible' },
    { id: 'Vagón', name: 'Vagón' }
  ];
  yearAuto: any[] = [
    { id: '1990', name: '1990' },
    { id: '2000', name: '2000' },
    { id: '2010', name: '2010' },
    { id: '2020', name: '2020' }
  ];
  selectedTypeAuto = [];
  selectedModelAuto = [];
  selectedyearAuto = [];
  constructor() {

  }

  ngOnInit(): void {
  }
  clearModel() {
    this.selectedTypeAuto = [];
    this.selectedModelAuto = [];
    this.selectedyearAuto = [];
  }

}
