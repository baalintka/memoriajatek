

class Kartya {
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
    #szuloElem;
    constructor(fajlnev, szuloelem) {
        this.#fajlnev = fajlnev;
        this.#szuloElem = szuloelem;
        szuloelem.append ( `
            <div class="kartyak">
                <img src="./kepek/hatter.jpg" alt="kép">
            </div>`);
        this.#allapot = false;
    }
}

export default Kartya;