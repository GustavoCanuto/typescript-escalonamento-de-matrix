import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-gerador-matrix',
  templateUrl: './gerador-matrix.component.html',
  styleUrls: ['./gerador-matrix.component.css']
})
export class GeradorMatrixComponent {
  @Input() matriz: number[][] = [[]];
  @Input() matriz2: string[][] = [[]];
  @Input() readonly: boolean = false;
  @Input() adicionarMais: boolean = false; // Novo input para indicar se deve adicionar "+"
  @Input() tipoInput: string = 'number'; // Novo input para o tipo de input
  @Output() matrizChange = new EventEmitter<number[][]>();

  constructor(public dialog: MatDialog) {}



  openModal(rowIndex: number, colIndex: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result !== undefined) {
        // Atualizar o valor do input clicado
        this.matriz[rowIndex][colIndex] = result;
        // Emitir a matriz atualizada
        this.matrizChange.emit(this.matriz);
      }
    });
  }
  test(){
  alert(this.tipoInput);
  }

  atualizarValor(event: Event, rowIndex: number, colIndex: number) {
    const input = event.target as HTMLInputElement;
    if (!input) {
      return;
    }

    let valor = input.value.trim(); // Obter valor do input


    const novaMatriz = this.matriz.map((row, i) => {
      if (i === rowIndex) {
        return row.map((col, j) => (j === colIndex ? parseFloat(valor) : col));
      } else {
        return row;
      }
    });
    this.matrizChange.emit(novaMatriz);


  }
}
