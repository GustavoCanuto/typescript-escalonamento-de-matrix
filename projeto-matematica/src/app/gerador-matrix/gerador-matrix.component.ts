import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gerador-matrix',
  templateUrl: './gerador-matrix.component.html',
  styleUrls: ['./gerador-matrix.component.css']
})
export class GeradorMatrixComponent {
  @Input() matriz: number[][] = [[]];
  @Input() readonly: boolean = false;
  @Input() adicionarMais: boolean = false; // Novo input para indicar se deve adicionar "+"
  @Output() matrizChange = new EventEmitter<number[][]>();

  atualizarValor(event: Event, rowIndex: number, colIndex: number) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.trim(); // Obter valor do input


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
