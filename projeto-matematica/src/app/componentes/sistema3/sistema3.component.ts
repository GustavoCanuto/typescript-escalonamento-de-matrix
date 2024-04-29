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

  //resultado com fracao
  matrizResultadoComFracao: string[][] = [[]];

  GerarMatrix() {
    this.matriz = [];
    this.matrizTeste = [[]];
    this.matrizResultado = [[]];
    this.matrizResultadoComFracao= [[]];
    this.tipoDeSistema = '';
    this.resultadoCalculo = '';
    this.variaveis=[];
    this.multiplicador = 0;
    this.subtracoes = 0;

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

    this.tipoDeSistema = '';
    this.resultadoCalculo = '';
    this.variaveis=[];
    this.multiplicador = 0;
    this.subtracoes = 0;
    this.tudoZero = 0;
    this.matrizEcalonada = true;
    // Não redefina matrizTeste aqui
    this.matrizTeste = this.matriz.map(row => row.slice());

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
                if (this.matrizTeste[j][j] == 0 && this.matrizTeste[j + 1][j] != 0) {
                  // Troca de linha j com a próxima linha
                  let tempRow = this.matrizTeste[j];
                  this.matrizTeste[j] = this.matrizTeste[j + 1];
                  this.matrizTeste[j + 1] = tempRow;
                  console.log("tempoRow ",tempRow, this.matrizTeste[j + 1])
                }
                if(this.matrizTeste[i][j]!=0){

                    for(let y =0 ;y < this.ordemy;y++)
                    {
                      let sub=   (this.matrizTeste[j][y]*divisor);
                      this.matrizTeste[i][y] += sub;
                      console.log(sub,"=",this.matrizTeste[j][y],"*",divisor);

                    }
                  }



                console.log("mudança");
                console.log(aux1," ",aux2," ",divisor," ", i," ",j);

              }
            }
        }

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

      this.matrizResultado = this.matrizTeste;

      //criar matriz com fracao
      this.matrizResultadoComFracao = this.matrizTeste.map(row =>
        row.map(value => {
          const result = this.decimalToFraction(value);
          return result;
        })
      );

  }

  Calcular() {
    this.resultadoCalculo = '';
    this.variaveis=[];
    this.multiplicador = 0;
    this.subtracoes = 0;

    for(let a = this.ordemx - 1 ;a>=0;a--)
      {
        for(let b = this.ordemx - 1; b >= 0;b--)
          {
            if(this.matrizTeste[a][b]!= 0){
              if(a==b){
                this.multiplicador = this.matrizTeste[a][b];
                console.log("multiplicador ",this.multiplicador);
              }
              else{
                this.subtracoes += this.matrizTeste[a][b]*this.variaveis[this.ordemx -1 - b];
                console.log(this.matrizTeste[a][b]*this.variaveis[this.ordemx -1 - b])
              }
            }

          }

          let resultado = this.matrizTeste[a][this.ordemy-1]- this.subtracoes;
          this.variaveis.push(resultado/this.multiplicador);
          console.log("sutraçoes", this.subtracoes,"resultado ", resultado);
          this.subtracoes=0;

      }
      this.resultadoCalculo = '';

      this.resultadoCalculo += "Os resultados são: \n";
      for (let v= this.ordemx-1; v>=0; v--) {
        let nomeVariavel = this.ordemx - v;
        // converter para fracao o resultado
        const resultConvertido = this.decimalToFraction(this.variaveis[v]);
        this.resultadoCalculo += `X${nomeVariavel} = ${resultConvertido}\n`;
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

}
