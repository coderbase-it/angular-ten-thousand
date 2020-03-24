export class Palier {
    valide = true;
    nombreSocks = 0;
    constructor(public valeur: number) {}

    deactivate() {
        this.valide = false;
    }
}
