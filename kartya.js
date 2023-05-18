
import Jatekter from "./jatekter.js";
class Kartya {
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;

    constructor(fajlnev, szuloelem) {
        this.#fajlnev = fajlnev;
        
        this.#szuloElem = szuloelem;
        szuloelem.append = `
            <div class="kartyak">
                <img src="" alt="kép">
            </div>`;
        this.#allapot = false;
    }
}

export default Kartya;