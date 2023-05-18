import Kartya from "./kartya.js";

class Jatekter {
  #kartyalista = [];
  #kivalasztottKartyalista = [];
  
  constructor(kartyalista) {
    const szuloELEM = $("article");
    
    this.#kartyalista = kartyalista;
    this.#kever();
    console.log(kartyalista);
    for (let index = 0; index < this.#kartyalista.length; index++) {
      let lapok = new Kartya(this.#kartyalista[index], szuloELEM);
    }
    szuloELEM.on("click",this.#kattintasTrigger);
  }
  #kever() {
    for (let i = this.#kartyalista.length - 1; i >= 0; i--) {
      let random = parseInt(Math.random() * (i + 1));
      let masik = this.#kartyalista[random];
      this.#kartyalista[random] = this.#kartyalista[i];
      this.#kartyalista[i] = masik;
    }
  }
  #kattintasTrigger(event){
    let db=0;
    const aktKep = event.target;
    console.log(aktKep.id)
    console.log($(aktKep).attr("id"));
    aktKep.src=this.#kartyalista[aktKep.id]
    this.#kivalasztottKartyalista.push($(aktKep).attr("id"))
    db++;
    if (db==2) {
        db=0;
        visszafordit();
    }
    console.log(this.#kivalasztottKartyalista)
  }
  #visszafordit(){
    console.log(this.#kivalasztottKartyalista)


  }
}

export default Jatekter;
