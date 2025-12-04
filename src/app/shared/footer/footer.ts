import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  private router = inject(Router)

  navigateTo(txt: string){
    this.router.navigate([txt])
  }
  navigateToUrl(url: string){
    this.router.navigateByUrl(url)
  }
}
