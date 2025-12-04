import { Router } from '@angular/router';
import { RecetasService } from '../../../services/commonService';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  recetasService = inject(RecetasService)
  private router = inject(Router)

  recetas: recetasDto[] = []

  constructor(){
    this.recetasService.getRecetas().subscribe(res=>{
      this.recetas = res
      console.log(res)
    })
  }

  navigateTo(ruta: string) {
    console.log(ruta)
    this.router.navigate([ruta]);
  }
}
