import { RecetasService } from './../../../services/recetasServices';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  recetasService = inject(RecetasService)

  recetas: recetasDto[] = []

  constructor(){
    this.recetasService.getRecetas().subscribe(res=>{
      this.recetas = res
      console.log(res)
    })
  }

  navigateTo(){
    
  }
}
