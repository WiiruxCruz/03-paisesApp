import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apuURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  //para que un observable se dispare por lo menos debo tener un subscribe
  buscarPais( termino: string ): Observable<any> {

    const url = `${ this.apuURL }/name/${ termino }`;

    return this.http.get( url )
    /*
    .pipe(
      //el of transforma lo que sea en un observable
      catchError( err => of([]) )
    )
    */
    ;
  }

}
