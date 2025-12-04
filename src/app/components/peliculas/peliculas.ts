import { Component, inject } from '@angular/core';
import { RecetasService } from '../../../services/commonService';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {

  recetasService = inject(RecetasService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  urlVideo!: SafeResourceUrl;

  peliculaNombre: string | null = null
  pelicula: peliculasDto | undefined = undefined
  fotoCarrusel: string | undefined = ""
  recetas: recetasDto[] = []

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.peliculaNombre = params.get('pelicula');  // <-- aquí cambia la variable
      this.recetasService.getPeliculas().subscribe(res => {
        console.log(res)
        this.pelicula = res.find(p => p.nombreURL == this.peliculaNombre)
        this.fotoCarrusel = this.pelicula?.fotosCarrusel[0]
        this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.pelicula?.enlaceVideo ?? '')
        this.recetasService.getRecetas().subscribe(res=>{
          this.recetas = res.filter(p=> p.peli === this.pelicula?.nombre)
        })
      })
    });
  }

  toUppercase(txt: string) {
    return txt.toUpperCase()
  }

  navigateTo(txt: string){
    this.router.navigate([txt]);
  }

}
