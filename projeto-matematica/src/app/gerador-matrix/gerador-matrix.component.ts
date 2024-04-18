import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gerador-matrix',
  templateUrl: './gerador-matrix.component.html',
  styleUrls: ['./gerador-matrix.component.css']
})
export class GeradorMatrixComponent {
  @Input() matriz: any[][] = [[]];
  @Input() readonly: boolean = false;
  @Output() matrizChange = new EventEmitter<any[][]>();

  atualizarValor(event: Event, rowIndex: number, colIndex: number) {
    const input = event.target as HTMLInputElement;
   let valor = parseFloat(input.value.trim()); // Obter valor do input
    if (isNaN(valor)) {
      valor = 0;
  }

    const novaMatriz = this.matriz.map((row, i) => {
      if (i === rowIndex) {
        return row.map((col, j) => (j === colIndex ? valor : col));
      } else {
        return row;
      }
    });
    this.matrizChange.emit(novaMatriz);
  }
}
