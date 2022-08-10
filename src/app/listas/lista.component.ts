import { Component, OnInit } from '@angular/core';
import { Lista } from '../listacomp';
import { ProductosLista } from '../mock-lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Listados = ProductosLista;

  selectedLista: Lista;


  constructor() { }

  ngOnInit() {
  }

  onSelect(Products: Lista): void {
    this.selectedLista = Products;
  }
}