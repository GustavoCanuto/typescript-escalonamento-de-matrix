import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gerador-matrix',
  templateUrl: './gerador-matrix.component.html',
  styleUrls: ['./gerador-matrix.component.css']
})

export class GeradorMatrixComponent {
  @Input() matriz: number[][] = [[]];
  @Input() readonly: boolean = false;
  @Output() matrizChange = new EventEmitter<number[][]>();

  atualizarMatriz() {
    this.matrizChange.emit(this.matriz);
  }
}
