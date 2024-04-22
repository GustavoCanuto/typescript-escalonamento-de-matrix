import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema1',
  templateUrl: './sistema1.component.html',
  styleUrl: './sistema1.component.css'
})
export class Sistema1Component {
  matriz1: number[][] = [];
  matriz2: number[][] = [];
  linhas: number = 0;
  colunas: number = 0;

  criarInputsMatriz(): void {
    this.linhas = parseInt((<HTMLInputElement>document.getElementById('rows')).value);
    this.colunas = parseInt((<HTMLInputElement>document.getElementById('columns')).value);
    const formulario = document.getElementById('matrixForm');
    if(formulario){
    formulario.innerHTML = '';
  }

    for (let i = 0; i < 2; i++) {
      const tituloMatriz = document.createElement('h4');
      tituloMatriz.textContent = `Matriz ${i + 1}`;
      formulario?.appendChild(tituloMatriz);
      const divMatriz = document.createElement('div');
      divMatriz.id = `matriz${i + 1}`;
      for (let r = 0; r < this.linhas; r++) {
        for (let c = 0; c < this.colunas; c++) {
          const input = document.createElement('input');
          input.type = 'number';
          input.id = `m${i + 1}${r}${c}`;
          input.placeholder = `M${i + 1}[${r}][${c}]`;
          // Autopreenchimento com zero se o campo estiver vazio
          input.value = '0';
          divMatriz.appendChild(input);
        }
        divMatriz.appendChild(document.createElement('br'));
      }
      formulario?.appendChild(divMatriz);
    }
    let matrixform = document.getElementById('matrixOperation');

    if(matrixform){
      matrixform.style.display = 'block';
    }
  }

  obterMatriz(idMatriz: string): number[][] {
    const matriz: number[][] = [];
    for (let r = 0; r < this.linhas; r++) {
      const linha: number[] = [];
      for (let c = 0; c < this.colunas; c++) {
        const valor = parseFloat((<HTMLInputElement>document.getElementById(`${idMatriz}${r}${c}`)).value);
        // Se o campo estiver vazio ou não for um número válido, definir como 0
        linha.push(isNaN(valor) ? 0 : valor);
      }
      matriz.push(linha);
    }
    return matriz;
  }

  validarMatrizesPreenchidas(): boolean {
    for (let r = 0; r < this.linhas; r++) {
      for (let c = 0; c < this.colunas; c++) {
        const valorMatriz1 = parseFloat((<HTMLInputElement>document.getElementById(`m1${r}${c}`)).value);
        const valorMatriz2 = parseFloat((<HTMLInputElement>document.getElementById(`m2${r}${c}`)).value);
        if (isNaN(valorMatriz1) || isNaN(valorMatriz2)) {
          alert('Por favor, preencha todos os campos das matrizes com valores numéricos.');
          return false; // Retorna falso se houver campos não preenchidos
        }
      }
    }
    return true; // Retorna verdadeiro se todas as matrizes estiverem preenchidas
  }

  somarMatrizes(): void {
    if (!this.validarMatrizesPreenchidas()) {
      return; // Interrompe a operação se as matrizes não estiverem completamente preenchidas
    }

    this.matriz1 = this.obterMatriz('m1');
    this.matriz2 = this.obterMatriz('m2');
    const resultadoMatriz: number[][] = [];
    for (let r = 0; r < this.linhas; r++) {
      const linha: number[] = [];
      for (let c = 0; c < this.colunas; c++) {
        linha.push(this.matriz1[r][c] + this.matriz2[r][c]);
      }
      resultadoMatriz.push(linha);
    }
    this.exibirResultado(resultadoMatriz);
  }

  multiplicarMatrizes(): void {
    if (!this.validarMatrizesPreenchidas()) {
      return; // Interrompe a operação se as matrizes não estiverem completamente preenchidas
    }

    this.matriz1 = this.obterMatriz('m1');
    this.matriz2 = this.obterMatriz('m2');
    const resultadoMatriz: number[][] = [];
    for (let r = 0; r < this.linhas; r++) {
      const linha: number[] = [];
      for (let c = 0; c < this.colunas; c++) {
        let soma = 0;
        for (let k = 0; k < this.colunas; k++) {
          soma += this.matriz1[r][k] * this.matriz2[k][c];
        }
        linha.push(soma);
      }
      resultadoMatriz.push(linha);
    }
    this.exibirResultado(resultadoMatriz);
  }

  exibirResultado(matriz: number[][]): void {
    const divResultado = document.getElementById('result');
    if(divResultado){
    divResultado.innerHTML = '';
    }

    matriz.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');

      row.forEach(value => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.textContent = value.toString();
        rowDiv.appendChild(cellDiv);
      });

      divResultado?.appendChild(rowDiv);
    });
  }

  processarMatrizes(evento: Event): void {
    evento.preventDefault();
  }
}
