import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema2',
  templateUrl: './sistema2.component.html',
  styleUrls: ['./sistema2.component.css']
})
export class Sistema2Component {
  numero1: number = 0;
  numero2: number = 0;
  matriz: number[][] = [[]];
  escalar: number = 0;
  resultado: number[][] = [];
  mostrarEscalar: boolean = false; // variável para controlar a visibilidade




  GerarMatrix() {
    this.matriz = [];
    for (let i = 0; i < this.numero1; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.numero2; j++) {
        this.matriz[i].push(0);
      }
    }
    this.mostrarEscalar = true; // torna visível após gerar a matriz
  }

  Multiplicar() {
    this.resultado = [];
    for (let i = 0; i < this.numero1; i++) {
      this.resultado.push([]);
      for (let j = 0; j < this.numero2; j++) {
        const value = this.matriz[i][j];
        const scalar = isNaN(parseFloat(String(this.escalar))) ? 0 : parseFloat(String(this.escalar));
        const result = isNaN(parseFloat(String(value))) ? value : parseFloat(String(value)) * scalar;
        this.resultado[i].push(result);
      }
    }
  }
  atualizarMatriz(matriz: number[][]) {
    this.matriz = matriz;
  }


}
