class Jatekter{

    #karytalista = [];
    #kivalasztottKartyalista = [];

    construct(kartyalista){
        const szuloELEM=$("article");
        this.#kartyaLista = kartyaLista;
        for (let index = 0; index < kartyalista.length; index++) {
            Lapok = new Jatekter(szuloELEM,kartyalista[index]);
            
        }
    }

}

export default Jatekter;

