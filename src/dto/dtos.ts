interface pasoDto {
    paso: string;
    imagen: string;
}

interface recetasDto {
    nombre: string;
    nombreURL: string;
    peli: string;
    categoria: string[];
    dificultad: number;
    minutos: number;
    raciones: number;
    fotoPortada: string;
    fotosCarrusel: string[];
    contexto: string;
    fotoIngredientes: string;
    ingredientes: string[];
    elaboracion: pasoDto[];
    imagenFinal: string;
}

interface peliculasDto {
    nombre: string;
    nombreURL: string;
    director: string;
    anyo: string;
    fotosCarrusel: string[];
    contexto: string;
    enlaceVideo: string;

}

