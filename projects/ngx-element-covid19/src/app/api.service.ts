import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, flatMap, map} from "rxjs/operators";
import {of} from "rxjs";
import {Country} from "./interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    BASE_URL = "https://covid19.mathdro.id/api";
  constructor(private http: HttpClient) { }

    getCountries() {
      return this.http.get<{countries: Country[] }>(`${this.BASE_URL}/countries`).pipe(

          map(data => data && data.countries ? data.countries : []),
          catchError(val => of(`impossible de récupérer la liste de pays :  ${val}`))
      )
    };

    getStatistics(countryCode:string) {
        let url:string;
        countryCode === "monde" ? url = this.BASE_URL : url = `${this.BASE_URL}/countries/${countryCode}`
        return this.http.get(url).pipe(

            catchError(val => of(`impossible de récupérer les statistiques pour ${countryCode} ${val}`)),
            flatMap((stats:any) => {
                if (stats.error) {
                   return of(stats.error.message);
                }
                else {
                    return of(stats)
                }
            } )
        )
    }

}



