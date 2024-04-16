import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  gerarMatrix(numeroLinhas: number, numeroColunas: number): number[][] {
    const matriz: number[][] = [];
    for (let i = 0; i < numeroLinhas; i++) {
      matriz.push([]);
      for (let j = 0; j < numeroColunas; j++) {
        matriz[i].push(0);
      }
    }
    return matriz;
  }
}
