import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema2',
  templateUrl: './sistema2.component.html',
  styleUrl: './sistema2.component.css'
})
export class Sistema2Component {
  numero1: number = 0;
  numero2: number = 0;
  matriz: number[][] = [];
  escalar: number = 0;
  resultado: number[][] = [];

  GerarMatrix() {
    this.matriz = [];
    for (let i = 0; i < this.numero1; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.numero2; j++) {
        this.matriz[i].push(0);
      }
    }
  }

  Multiplicar() {
    const resultMatrix: number[][] = [];
    for (let i = 0; i < this.numero1; i++) {
      resultMatrix.push([]);
      for (let j = 0; j < this.numero2; j++) {
        resultMatrix[i].push(this.matriz[i][j] * this.escalar);
      }
    }
    this.resultado = resultMatrix;
  }

}
