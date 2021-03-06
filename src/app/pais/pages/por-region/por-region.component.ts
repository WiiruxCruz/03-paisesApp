import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';
//import { ActivatedRoute } from '@angular/router';
//import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(
    //private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  activarRegion( region: string ) {

    if( region === this.regionActiva ) { return }
    this.regionActiva = region;
    this.paises = [];

    /*
    //ambas formas son validas solo que para este caso necesitas importar ActivatedRoute
    this.activatedRoute.params
    .pipe(
      switchMap( ( param ) => this.paisService.getBuscarRegion( this.regionActiva ) ),
      tap( console.log )
    )
    .subscribe(
      paises => this.paises = paises
    );
    */

    this.paisService.getBuscarRegion( this.regionActiva )
    .subscribe( paises => {
      console.log( paises )
      //aqui se hizo esto porque al buscar por region no se cargaba la clave del país a 2 letras
      //debido a que la busqueda por region ocupa v2 y la normal v3
      //entonces los campos eran difernetes, de esta manaera se logra hacer ese parche
      paises.forEach( idx => idx.cca2 = idx.alpha2Code );
      this.paises = paises;
    });
  }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva ) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

}
