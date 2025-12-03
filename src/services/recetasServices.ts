import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecetasService {
    constructor(private http: HttpClient) { }

    getRecetas(): Observable<recetasDto[]> {
        return this.http.get<any>('assets/json/recetas.json').pipe(
            map(data => data.Recetas as recetasDto[])
        );
    }

    getArrayVacia(n: number){
        return new Array(n).fill(0);
    }

    getTiempo(minutos: number){
        if (minutos < 60){
            
        } 
        return minutos + " min"
    }
}