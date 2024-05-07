

class Target{
    constructor( nombre, costo, poder, resilencia) {
        this.nombre = nombre;
        this.costo= costo;
        this.poder = poder;
        this.resilencia = resilencia;
    }
    algoritmoDuro(targeta){
        targeta.resilencia+=3;
    }
    
    rechazoDePromesa(targeta){
        targeta.resilencia-=2;
    }
    
    programacionEnPareja(targeta){
        targeta.poder+=2;
    }
    play(targeta){
        if(targeta instanceof Unit){
                console.log("Jugador 1 invoca:"+ targetas[0])
                console.log("Jugador 1 juega"+ targetas[2].nombre);
                targetas[2].algoritmoDuro(targetas[0]);
                console.log( targetas[0].nombre+ "Aumento su resiliencia en: "+ targetas[0].resilencia);
                console.log("Jugador 2 invoca:"+ targetas[1]);
                console.log("Jugador 2 juega: "+ targetas[3].nombre+ "en "+targetas[1]);
                targetas[3].rechazoDePromesa(targetas[0]);
                console.log( targetas[0].nombre+ "Disminuye su resiliencia en: "+ targetas[0].resilencia);
                console.log("Jugador 1 invoca:"+ targetas[4]+ "en "+ targetas[0]);
                targetas[4].programacionEnPareja(targetas[0]);
                console.log( targetas[0].nombre+ "Aumento su poder en: "+ targetas[0].poder);
                console.log("El jugador 1 tiene el ataque Ninja Cinturón Rojo");
    
        }else{
            throw new Error("Target must be a unit!");
        }
}
}

class Unit extends Target{
    constructor( nombre,costo, poder, resilencia) {
        super( nombre,costo, poder, resilencia);
        this.tipo = "unidad";
    }
}
class Effect extends Target{
    constructor( nombre, tipo, costo, poder, resilencia) {
        super( nombre, tipo, costo, poder, resilencia);
        this.tipo = "efecto";
    }
}
const ninjaCinturonRojo = new Unit("Ninja Cinturon Rojo", 3,3,4);
const ninjaCinturonNegro = new Unit("Ninja Cinturon Negro",4,5,4);


const algoritmoDificil = new Effect("Algoriitmo Dificil", 2,0,3);
const rechazoDePromesa = new Effect("Rechazo de promesa no manejado",1,0,-2);
const programacionEnPareja = new Effect("Programacion en Pareja",3,2,0);
const targetas=[ninjaCinturonRojo, ninjaCinturonNegro,algoritmoDificil, rechazoDePromesa,programacionEnPareja]

const targeta = new Target();
targeta.play(ninjaCinturonNegro);