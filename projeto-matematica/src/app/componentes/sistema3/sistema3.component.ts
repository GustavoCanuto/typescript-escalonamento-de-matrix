import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema3',
  templateUrl: './sistema3.component.html',
  styleUrl: './sistema3.component.css'

})
export class Sistema3Component {
  numero1: number = 0;
  numero2: number = 0 ;
  resultado: number = 0;
  ordemx: number = 0;
  ordemy: number = 0;

  gerarMatriz()
  {
    for (let n=0)
  }


  somar() {
    this.resultado = this.numero1 + this.numero2;
  }

}
