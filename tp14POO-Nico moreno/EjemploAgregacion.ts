// --- AGREGACIÓN ---
class AeroplanoAgregacion {
    private helice: Helice;
    private alas: Alas;

    // Los objetos se crean fuera y se "agregan" al avión
    constructor(pHelice: Helice, pAlas: Alas) {
        this.helice = pHelice;
        this.alas = pAlas;
    }

    public volar(): void {
        console.log("El avión de agregación está listo.");
    }
}

// Uso:
const miHelice = new Helice(4); // Existe independientemente
const misAlas = new Alas(2, 1);
const miAvionAgregado = new AeroplanoAgregacion(miHelice, misAlas);