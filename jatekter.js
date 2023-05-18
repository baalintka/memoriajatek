import Kartya from "./kartya.js";
class Jatekter{

    #kartyalista = [];
    #kivalasztottKartyalista = [];

    construct(kartyalista){
        const szuloELEM=$("article");
        this.#kartyalista = kartyalista;
        this.#init();
        for (let index = 0; index < kartyalista.length; index++) {
            Lapok = new Jatekter(kartyalista[index],szuloELEM);
            
        }
    }

}

export default Jatekter;

