import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';
  private apiURLRegional: string = 'https://restcountries.com/v2/regionalbloc'

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population,cca2');
  }

  //para que un observable se dispare por lo menos debo tener un subscribe
  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
    /*
    .pipe(
      //el of transforma lo que sea en un observable
      catchError( err => of([]) )
    )
    */
    ;
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
    /*
    .pipe(
      //el of transforma lo que sea en un observable
      catchError( err => of([]) )
    )
    */
    ;
  }

  getPaisPorAlpha( id: string ): Observable<Country[]>{
    const url = `${ this.apiURL }/alpha/${ id }`;

    //return this.http.get<Country[]>( url , { params: this.httpParams } );
    return this.http.get<Country[]>( url );

  }

  getBuscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiURLRegional }/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

}
