// --- ASOCIACIÓN SIMPLE ---
class Mecanico {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // El mecánico "usa" el aeroplano temporalmente para repararlo
    public reparar(avion: Aeroplano): void {
        console.log(`El mecánico ${this.nombre} está reparando el: ${avion.ToString()}`);
    }
}

// Uso:
const mecanicoJuan = new Mecanico("Juan");
mecanicoJuan.reparar(aeroplano); // Asociación temporal por parámetro