// --- COMPOSICIÓN ---
class AeroplanoComposicion {
    private tren: TrendeAterrizaje;
    private cubierta: Cubierta;

    constructor() {
        // El avión CREA sus propias partes internamente
        // Los parámetros podrían pasarse al constructor del avión
        this.tren = new TrendeAterrizaje(3, 2, true);
        this.cubierta = new Cubierta(true, true, false, 2, 2);
    }

    public ToString() {
        return `Avión con: ${this.tren.ToString()} y ${this.cubierta.ToString()}`;
    }
}

// Uso:
const miAvionCompuesto = new AeroplanoComposicion();