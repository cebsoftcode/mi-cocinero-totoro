import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecetasService {

    private http = inject(HttpClient)

    getRecetas(): Observable<recetasDto[]> {
        return this.http.get<any>('assets/json/recetas.json').pipe(
            map(data => data.Recetas as recetasDto[])
        );
    }

    getPeliculas(): Observable<peliculasDto[]>{
        return this.http.get<any>('assets/json/peliculas.json').pipe(
            map(data => data.Peliculas as peliculasDto[])
        );
    }

    getArrayVacia(n: number) {
        return new Array(n).fill(0);
    }

    //ToDo: Terminar este metodo
    getTiempo(minutos: number) {
        if (minutos < 60) {

        }
        return minutos + " min"
    }
}