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
    this.#kattintasTrigger();
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
    const aktKep = event.target;
    console.log(aktKep.id)

  }
}

export default Jatekter;
