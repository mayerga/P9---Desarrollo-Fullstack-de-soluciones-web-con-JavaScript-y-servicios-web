class cronometro {
  constructor() {
    this._segundos;
  }

  get segundos() {
    return this._segundos;
  }

  set segundos(segundos) {
    this._segundos = segundos;
  }

  inicializaCronometro() {
    let secInicio = 10;
    this._segundos = secInicio;           //Revisar al final
    let seconds = document.getElementById('seconds');
    
    this.cuentaAtrasCronometro(seconds);
    //return this._segundos;
  }

  cuentaAtrasCronometro(seconds) {
    while(this._segundos >=0){
    console.log(this._segundos);
    seconds.innerHTML = this._segundos;   //POR AQUÍ HAY QUE METER EL SET INTERVAL
    this._segundos--;
    }   
  }

  reiniciaCronometro(){

    if (this._segundos == 0){

        alert("Se acabo el tiempo! Cambio de Turno" );
    }

    this.inicializaCronometro();
  }
}

/*------------------------------------------------------------------*/

//     constructor(/*enum-SOLO PERMITIDO CON TYPESCRIPT*/){
//         this.enum=this.enum;
//     }
//     /*DEFINIMOS GETTERS & SETTERS */
//     set enum(valor){
//         this.enum=valor;
//     }
//     get enum(){
//         return this.enum;
//     }
//     /*DEFINIMOS METODOS */
//     retrocederTiempor(){

//     }
//     reiniciarCronometro(){

//     }

// }
