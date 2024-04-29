import { Component } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sistema2',
  templateUrl: './sistema2.component.html',
  styleUrls: ['./sistema2.component.css']
})
export class Sistema2Component {
  numero1: number = 0;
  numero2: number = 0;
  matriz: number[][] = [[]];
  matriz2: string[][] = [[]];
  escalar: number = 0;
  resultado: string[][] = [];
  mostrarEscalar: boolean = false; // variável para controlar a visibilidade


  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.escalar = result;
      }
    });
  }

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


        const resultConvertido = this.decimalToFraction(result);


        this.resultado[i].push(resultConvertido);
      }
    }
  }

  decimalToFraction(decimal: number) {
    const tolerance = 1.0E-6;
    const sign = Math.sign(decimal);
    decimal = Math.abs(decimal);

    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let b = decimal;

    do {
        let a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);

    if (k1 === 1) {
        return (sign === -1 ? "-" : "") + h1.toString();
    } else {
        return (sign === -1 ? "-" : "") + h1 + "/" + k1;
    }
}

  atualizarMatriz(matriz: number[][]) {
    this.matriz = matriz;
  }

}
