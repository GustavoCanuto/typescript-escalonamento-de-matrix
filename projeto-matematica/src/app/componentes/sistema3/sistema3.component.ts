import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema3',
  templateUrl: './sistema3.component.html',
  styleUrl: './sistema3.component.css'

})
export class Sistema3Component {
  numero1: number = 0;
  numero2: number = 0 ;
  resultado: number[][] = [];
  mostrarEscalar: boolean = false; // variável para controlar a visibilidade
  ordemx: number = 3;
  ordemy: number = 4;
  matrizTeste: number[][] =[[1,-1,1,1],
                            [2,1,2,0],
                            [3,-1,1,1]];
  matrizEcalonada :boolean =false;
  

  

  MetodoDeGauss()
  {
    for(let i = 0;i<this.ordemx;i++)
    {
        for(let j=0;j<this.ordemy;j++)
        {
            if(i>j){
              if(this.matrizTeste[i][j]== 0)
              {
                this.matrizEcalonada = true;
              }
              else
              {
                let aux1= this.matrizTeste[i][j];
                let aux2= this.matrizTeste[i-1][j];
                let divisor = -1*(aux1/aux2);
                for(let y =0 ;y < this.ordemy;y++)
                {
                  this.matrizTeste[i][y] = this.matrizTeste[i][y] + (this.matrizTeste[i-1][y]/divisor);
                }

              }
            }
        }
    }
    

  }                          

  somar() {
    //this.resultado = this.numero1 + this.numero2;
    
  }

}
