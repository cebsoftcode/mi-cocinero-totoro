import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../../../services/commonService';

@Component({
  selector: 'app-recetario',
  imports: [],
  templateUrl: './recetario.html',
  styleUrl: './recetario.css',
})
export class Recetario {

  recetasService = inject(RecetasService)
  private router = inject(Router)

  recetaNombre: string |null = null

  receta: recetasDto | undefined = undefined
  fotoCarrusel: string | undefined = ""

  private route = inject(ActivatedRoute);

  // constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recetaNombre = params.get('receta');  // <-- aquí cambia la variable
      this.recetasService.getRecetas().subscribe(res=>{
      this.receta = res.find(p=>p.nombreURL == this.recetaNombre)
      this.fotoCarrusel = this.receta?.fotosCarrusel[0]
    })
    });
  }

  toUppercase(txt: string) {
    return txt.toUpperCase()
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
  

}
