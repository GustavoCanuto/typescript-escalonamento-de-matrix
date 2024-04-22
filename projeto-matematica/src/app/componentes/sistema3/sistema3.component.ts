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
  ordemy: number = this.ordemx + 1;
  matrizTeste: number[][] =[[1,-1,1,1],
                            [2,1,2,0],
                            [3,-1,1,1]];
  variaveis: number[]=[];
  subtracoes: number = 0
  matrizEcalonada :boolean =true;
  calculando :boolean =false;
  multiplicador :number = 0;
  matrizResultado: number[][] = [[]];
  matriz: number[][] = [[]];
  resultadoCalculo: string = '';
  tipoDeSistema:string = '';
  tudoZero: number= 0;

  GerarMatrix() {
    this.matriz = [];
    for (let i = 0; i < this.ordemx; i++) {
      this.matriz.push([]);
      for (let j = 0; j < this.ordemy; j++) {
        this.matriz[i].push(0);
      }
    }

    this.mostrarEscalar = true; // torna visível após gerar a matriz
  }


  atualizarMatriz(matriz: number[][]) {
    this.matriz = matriz;
  }



  MetodoDeGauss()
  {

    //alert(this.matrizTeste);
    // Não redefina matrizTeste aqui
    this.matrizTeste = this.matriz.map(row => row.slice());
    //alert(this.matrizTeste);



    for(let i = 0;i<this.ordemx;i++)
    {
        for(let j=0;j<this.ordemy;j++)
        {
            if(i>j){
              if(this.matrizTeste[i][j]== 0)
              {
                //this.matrizEcalonada = true;
              }
              else
              {
                let aux1= this.matrizTeste[i][j];
                let aux2= this.matrizTeste[j][j];
                let divisor = -1*(aux1/aux2);

                    for(let y =0 ;y < this.ordemy;y++)
                    {
                      let sub=   (this.matrizTeste[j][y]*divisor);
                      this.matrizTeste[i][y] += sub;
                      //console.log(sub,"=",this.matrizTeste[j][y],"*",divisor);

                    }



                //console.log("mudança");
                //console.log(aux1," ",aux2," ",divisor," ", i," ",j);

              }
            }
        }
      //  alert("teste");
       // this.atualizarMatriz(this.matrizTeste);
    }
    for(let i = 0;i<this.ordemx;i++)
      {
          for(let j=0;j<this.ordemy;j++)
          {
            
            if(i>j){
              if(this.matrizTeste[i][j]!=0)
                {
                  this.matrizEcalonada = false;
                }
            }
            if (this.matrizTeste[i][j]==0){
              this.tudoZero+=1;
            }
            
          }
          if(this.tudoZero== this.ordemy)
            {
              this.tipoDeSistema = "SPI";
              this.matrizEcalonada= false;
            }
            if (this.tudoZero==this.ordemy -1 && this.matrizTeste[i][this.ordemy-1] !=0){
              this.tipoDeSistema = "SI";
              this.matrizEcalonada= false;
            }
            this.tudoZero= 0;
      }
      if(this.matrizEcalonada==true)
        {
          this.tipoDeSistema = "SPD";
        }
      else if (this.tipoDeSistema !="SPI")
        {
          this.tipoDeSistema = "SI";
        }
      //alert(this.matriz);
      //alert(this.matrizTeste);
      this.matrizResultado = this.matrizTeste;
  }

  Calcular() {
    for(let a = this.ordemx - 1 ;a>=0;a--)
      {
        for(let b = this.ordemx - 1; b >= 0;b--)
          {
            if(this.matrizTeste[a][b]|| 0){
              if(a==b){
                this.multiplicador = this.matrizTeste[a][b];
                console.log("multiplicador ",this.multiplicador);
              }
              else{
                this.subtracoes += this.matrizTeste[a][b]*this.variaveis[this.ordemx -1 - b];
              }
            }

          }

          let resultado = this.matrizTeste[a][this.ordemy-1]- this.subtracoes;
          this.variaveis.push(resultado/this.multiplicador);
          console.log("sutraçoes", this.subtracoes,"resultado ", resultado);

      }
      this.resultadoCalculo = '';

      this.resultadoCalculo += "Os resultados são: \n";
      for (let v= this.ordemx-1; v>=0; v--) {
        let nomeVariavel = this.ordemx - v;
        this.resultadoCalculo += `X${nomeVariavel} = ${this.variaveis[v]}\n`;
      }
    }

}
