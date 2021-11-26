import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apuURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  //para que un observable se dispare por lo menos debo tener un subscribe
  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apuURL }/name/${ termino }`;

    return this.http.get<Country[]>( url )
    /*
    .pipe(
      //el of transforma lo que sea en un observable
      catchError( err => of([]) )
    )
    */
    ;
  }

}
