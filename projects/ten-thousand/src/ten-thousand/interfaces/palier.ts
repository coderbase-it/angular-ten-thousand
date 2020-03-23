export class Palier {
    valide = true;
    constructor(public valeur: number) {}

    deactivate() {
        this.valide = false;
    }
}
