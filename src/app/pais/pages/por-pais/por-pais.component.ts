import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Hola mundo!';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais( this.termino )
    .subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      }

    );
  }


}
