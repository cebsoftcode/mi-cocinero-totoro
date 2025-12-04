import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../../../services/commonService';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [NgClass],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
  categoria: string | null = null
  recetas: recetasDto[] = []

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  recetasService = inject(RecetasService);

  constructor() {
    this.recetasService.getRecetas().subscribe(res=>{
      this.recetas = res;
    })

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');  // <-- aquí cambia la variable
    });
  }

  toUppercase(txt: string) {
    return txt.toUpperCase()
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}
