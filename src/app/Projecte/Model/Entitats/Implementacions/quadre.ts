export class Guardia {
    id: number;
    diaFestiu: Date;
    torn: string;
    unitat: string;
    categoria: string;
    places: number;

    constructor(id: number, diaFestiu: Date, torn: string, unitat: string, categoria: string, places: number) {
        this.id = id;
        this.diaFestiu = diaFestiu;
        this.torn = torn;
        this.unitat = unitat;
        this.categoria = categoria;
        this.places = places;
    }
}